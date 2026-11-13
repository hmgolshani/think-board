import {type ReactNode, useState} from "react";
import type {Note} from "../../types/note.ts";
import {useDeleteNote} from "../../hooks/useNoteMutations.ts";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {Trash2} from "lucide-react";
import Button from "../ui/Button.tsx";

type DeleteNoteDialogProps = {
    trigger: ReactNode; // the button that opens this question
    note: Note;
    onDeleted?: () => void; // optional: what to do after a successful delete (e.g. go back to the list)
};

const DeleteNoteDialog = ({trigger, note, onDeleted}: DeleteNoteDialogProps) => {
    const [open, setOpen] = useState(false);
    const deleteMutation = useDeleteNote();

    async function handleConfirm() {
        try {
            await deleteMutation.mutateAsync(note.id);
            setOpen(false);
            onDeleted?.();
        } catch { /* empty */
        }
    }

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 z-50 grid animate-fade place-items-center
                overflow-y-auto bg-ink/45 p-4 motion-reduce:animate-none"
                >
                    <AlertDialog.Content
                        className="w-full max-w-md animate-pop rounded-2xl bg-white p-6 shadow-2xl motion-reduce:animate-none"
                    >
                        <div className="mb-4 grid size-12 place-items-center
                         rounded-xl bg-danger-soft text-danger"
                        >
                            <Trash2 size={22}
                                    aria-hidden="true"
                            />

                        </div>

                        <AlertDialog.Title className="font-display text-2xl font-medium">
                            Delete this note?
                        </AlertDialog.Title>

                        <AlertDialog.Description className="mt-2 leading-relaxed text-muted">
                            <b className="font-semibold text-ink"
                               dir="auto"
                            >
                                “{note.title}”
                            </b> {" "}
                            will be permanently deleted. This can’t be undone.
                        </AlertDialog.Description>

                        <div className="mt-6 flex justify-end gap-2">

                            <AlertDialog.Cancel asChild>
                                <Button variant="ghost"
                                        disabled={deleteMutation.isPending}
                                >
                                    Cancel
                                </Button>
                            </AlertDialog.Cancel>


                            <Button variant="danger"
                                    isLoading={deleteMutation.isPending}
                                    onClick={handleConfirm}
                            >
                                Delete note
                            </Button>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Overlay>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );

};

export default DeleteNoteDialog;