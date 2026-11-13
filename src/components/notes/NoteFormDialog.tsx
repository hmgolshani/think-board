import {type ReactNode, useState} from "react";
import type {Note} from "../../types/note.ts";
import {useCreateNote, useUpdateNote} from "../../hooks/useNoteMutations.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type NoteFormValues, noteSchema} from "../../schemas/noteSchema.ts";
import FormField from "../ui/FormField.tsx";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../ui/Button.tsx";

type NoteFormProps = {
    trigger: ReactNode;
    note?: Note;
};

function inputClass(hasError: boolean) {
    return `w-full rounded-[10px] border bg-white px-3 py-2.5 text-[15.5px] outline-none transition-shadow 
    placeholder:text-muted/70 focus:border-accent focus:ring-[3px] focus:ring-accent/20 disabled:opacity-60 
    ${hasError ? "border-danger bg-danger-soft/40" : "border-line"}`
}


const NoteFormDialog = ({trigger, note}: NoteFormProps) => {
    const isEditing = note !== undefined;
    const [open, setOpen] = useState(false);

    const createMutation = useCreateNote();
    const updateMutation = useUpdateNote();
    const isSaving = createMutation.isPending || updateMutation.isPending;

    const {register, handleSubmit, reset, formState: {errors}} = useForm<NoteFormValues>
    ({
        resolver: zodResolver(noteSchema),
        defaultValues: {title: note?.title ?? "", content: note?.content ?? ""},
    });


    function handleOpenChange(next: boolean) {
        setOpen(next);
        if (next) reset({title: note?.title ?? "", content: note?.content ?? ""});
    }


    async function onSubmit(values: NoteFormValues) {
        try {
            if (note) await updateMutation.mutateAsync({id: note.id, data: values});
            else await createMutation.mutateAsync(values);
            setOpen(false);
        } catch { /* empty */
        }
    }

    const heading = isEditing ? "Edit note" : "New note";

    return (
        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 z-50 grid animate-fade place-items-center overflow-y-auto bg-ink/45 p-4 motion-reduce:animate-none">
                    <Dialog.Content
                        className="w-full max-w-125 animate-pop rounded-2xl bg-white p-6 shadow-2xl motion-reduce:animate-none">

                        <Dialog.Title className="font-display text-[25px] font-medium">
                            {heading}
                        </Dialog.Title>

                        <Dialog.Description className="mt-1 mb-5 text-sm text-muted">
                            {isEditing ? "Your changes are saved to the server."
                                : "Give it a title and write what you want to remember."}
                        </Dialog.Description>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <FormField label="Title"
                                       htmlFor="note-title"
                                       error={errors.title?.message}
                            >
                                <input id="note-title"
                                       dir="auto"
                                       placeholder="Weekly planning"
                                       className={inputClass(!!errors.title)}
                                       disabled={isSaving}
                                       {...register("title")}
                                />
                            </FormField>

                            <FormField label="Description"
                                       htmlFor="note-content"
                                       error={errors.content?.message}
                            >
                                <textarea id="note-content"
                                          dir="auto"
                                          rows={5}
                                          placeholder="Write your note here…"
                                          className={inputClass(!!errors.content)}
                                          disabled={isSaving}
                                          {...register("content")}
                                />
                            </FormField>

                            <div className="mt-6 flex justify-end gap-2">

                                <Dialog.Close asChild>
                                    <Button variant="ghost"
                                            disabled={isSaving}>
                                        Cancel
                                    </Button>
                                </Dialog.Close>

                                <Button type="submit"
                                        isLoading={isSaving}
                                >
                                    {isSaving ? "Saving…"
                                        : isEditing ? "Save changes"
                                            : "Save note"}
                                </Button>

                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );

};

export default NoteFormDialog;
