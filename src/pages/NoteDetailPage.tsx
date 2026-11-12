import {Link, useNavigate, useParams} from "react-router-dom";
import type {Note} from "../types/note.ts";
import {ArrowLeft, FileText} from "lucide-react";
import {useNote} from "../hooks/useNote.ts";
import NoteDetail from "../components/notes/NoteDetail.tsx";
import EmptyState from "../components/ui/EmptyState.tsx";
import Button from "../components/ui/Button.tsx";

type NoteDetailPageProps = {
    onEdit: (note: Note) => void;
    onDelete: (note: Note) => void;
}

const NoteDetailPage = ({onEdit, onDelete}: NoteDetailPageProps) => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {notes} = useNote();

    const note = notes.find((note) => note.id === id);

    return (
        <main className="mx-auto max-w-6xl px-7 py-7 lg:px-4">
            <Link to="/"
                  className="mb-5 inline-flex items-center gap-2 font-medium text-muted hover:text-ink"
            >
                <ArrowLeft size={18} aria-hidden="true"/>
                All notes
            </Link>

            {note ?
                (<NoteDetail note={note} onEdit={onEdit} onDelete={onDelete}/>) :
                (
                    <EmptyState icon={<FileText size={28} aria-hidden="true"/>}
                                title="Note not found"
                                description="This note may have been deleted, or the link is wrong"
                                action={
                                    <Button variant="secondary" onClick={() => navigate("/")}>
                                        Back to all notes
                                    </Button>
                                }
                    />
                )

            }


        </main>
    );
};

export default NoteDetailPage;