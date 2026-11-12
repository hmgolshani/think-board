import type {Note} from "../../types/note.ts";
import {formatDate} from "../../utils/formatDate.ts";
import Button from "../ui/Button.tsx";
import {Pencil, Trash2} from "lucide-react";

type NoteDetailProps = {
    note: Note
    onEdit: (note: Note) => void
    onDelete: (note: Note) => void
}
const NoteDetail = ({note, onEdit, onDelete}: NoteDetailProps) => {
    return (
        <article>
            <h1 className="mb-2.5 font-display text-3xl leading-tight font-medium sm:text-4xl"
                dir="auto">
                {note.title}
            </h1>

            <p className="text-sm text-muted">
                Created {formatDate(note.createdAt)}
                {note.updatedAt !== note.createdAt && ` · Updated ${formatDate(note.updatedAt)}`}
            </p>

            <div className="mt-6 border-t border-line pt-6 text-[17px] leading-relaxed whitespace-pre-wrap text-ink/90"
                 dir="auto">{note.content}
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Button variant={"secondary"}
                        icon={<Pencil size={18} aria-hidden="true"/>}
                        onClick={() => onEdit(note)}
                >
                Edit
                </Button>

                <Button variant={"dangerOutline"}
                        icon={<Trash2 size={18} aria-hidden="true"/>}
                        onClick={() => onDelete(note)}>
                Delete
                </Button>

            </div>
        </article>
    );
};

export default NoteDetail;