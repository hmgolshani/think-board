import type {Note} from "../../types/note.ts";
import {Link} from "react-router-dom";
import {formatDate} from "../../utils/formatDate.ts";
import IconButton from "../ui/IconButton.tsx";
import {Pencil, Trash2} from "lucide-react";

type NoteCardProps = {
    note: Note
    onEdit: (note: Note) => void;
    onDelete: (note: Note) => void;
}

const NoteCard = ({note, onEdit, onDelete}: NoteCardProps) => {
    return (
        <article className="relative flex min-h-48 flex-col rounded-[14px] border border-line bg-white px-[18px] pt-[18px]
         pb-2.5 transition-[transform,box-shadow] duration-150
         hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10
         motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
            <h3 className="mb-2 font-display text-xl leading-tight font-medium" dir="auto">
                <Link to={`/notes/${note.id}`}
                      className="after:absolute after:inset-0 after:rounded-[14px]">
                    {note.title}
                </Link>
            </h3>

            <p className="line-clamp-3 leading-relaxed text-muted" dir="auto">
                {note.content}
            </p>

            <footer className="mt-auto flex items-center justify-between pt-3.5">
                <time dateTime={note.createdAt}
                      className="text-[13px] text-muted"
                >
                    {formatDate(note.createdAt)}
                </time>
                <div className="relative z-10 -mr-2 flex gap-0.5">
                    <IconButton label={"Delete note"}
                                icon={<Trash2 size={18} aria-hidden={true}/>}
                                onClick={() => {
                                    onDelete(note)
                                }}
                    />
                    <IconButton label={"Edit note"}
                                icon={<Pencil size={18} aria-hidden={true} />}
                                onClick={() => onEdit(note)}
                    />
                </div>
            </footer>
        </article>
    );
};

export default NoteCard;