import {Link, useNavigate, useParams} from "react-router-dom";
import {ArrowLeft, FileText} from "lucide-react";
import {useNote} from "../../hooks/useNote.ts";
import NoteDetail from "../notes/NoteDetail.tsx";
import EmptyState from "../ui/EmptyState.tsx";
import Button from "../ui/Button.tsx";
import {getErrorMessage, isNotFoundError} from "../../utils/getErrorMessage.ts";
import ErrorState from "../ui/ErrorState.tsx";
import NoteDetailSkeleton from "../notes/NoteDetailSkeleton.tsx";



const NoteDetailPage = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data: note, isLoading, error, refetch} = useNote(id)

    const renderContent = () => {
        if (isLoading) return <NoteDetailSkeleton/>;

        if (error && isNotFoundError(error)) {
            return (
                <EmptyState
                    icon={<FileText size={28} aria-hidden="true"/>}
                    title="Note not found"
                    description="This note may have been deleted, or the link is wrong."
                    action={
                        <Button variant="secondary" onClick={() => navigate("/")}>
                            Back to all notes
                        </Button>
                    }
                />
            );
        }

        if (error) {
            return (
                <ErrorState
                    title="We couldn’t load this note"
                    message={getErrorMessage(error)}
                    onRetry={() => refetch()}
                />
            );
        }

        if (note) return <NoteDetail note={note}
                                     onDelete={() => navigate("/")}
        />;
        return null;
    };


    return (
        <main className="mx-auto max-w-6xl px-7 py-7 lg:px-4">
            <Link to="/"
                  className="mb-5 inline-flex items-center gap-2 font-medium text-muted hover:text-ink"
            >
                <ArrowLeft size={18} aria-hidden="true"/>
                All notes
            </Link>
            {renderContent()}

        </main>
    );
};

export default NoteDetailPage;