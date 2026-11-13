import NotesToolbar from "../notes/NotesToolbar.tsx";
import {useState} from "react";
import type {Note, SortOption} from "../../types/note.ts";
import {useNote} from "../../hooks/useNote.ts";
import {filterNotes, sortNotes} from "../../utils/notes.ts";
import ErrorState from "../ui/ErrorState.tsx";
import EmptyState from "../ui/EmptyState.tsx";
import Button from "../ui/Button.tsx";
import {FileText, Plus, Search} from "lucide-react";
import NoteCard from "../notes/NoteCard.tsx";
import NoteCardSkeleton from "../notes/NoteCardSkeleton.tsx";

type NotesPageProps = {
    onNewNote: () => void;
    onEdit: (note: Note) => void;
    onDelete: (note: Note) => void;
};


const NotesPage = ({onNewNote,onEdit,onDelete}:NotesPageProps) => {
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState<SortOption>("newest");
    const { notes, isLoading ,error,reload } = useNote();

    const visibleNotes = sortNotes(filterNotes(notes, searchText), sort);

    const countLabel = isLoading
        ? "Loading…"
        : searchText.trim() !== ""
            ? `${visibleNotes.length} ${visibleNotes.length === 1 ? "result" : "results"}`
            : `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;

    const renderContent = () => {
        if (error) return <ErrorState message={error} onRetry={reload} />;

        if (isLoading) {
            return (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }, (_, index) => (
                        <NoteCardSkeleton key={index} />
                    ))}
                </div>
            );
        }

        if (notes.length === 0) {
            return (
                <EmptyState
                    tone="accent"
                    icon={<FileText size={28} aria-hidden="true" />}
                    title="No notes yet"
                    description="Capture a thought, a plan or a link. Your first note takes a few seconds."
                    action={
                        <Button icon={<Plus size={18} aria-hidden="true" />} onClick={onNewNote}>
                            Create your first note
                        </Button>
                    }
                />
            );
        }

        if (visibleNotes.length === 0) {
            return (
                <EmptyState
                    icon={<Search size={28} aria-hidden="true" />}
                    title={`No notes match “${searchText.trim()}”`}
                    description="Try a different word, or clear the search to see all notes."
                    action={
                        <Button variant="secondary" onClick={() => setSearchText("")}>
                            Clear search
                        </Button>
                    }
                />
            );
        }

        return (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleNotes.map((note) => (
                    <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
        );

    }

    return (
        <main className="mx-auto max-w-6xl px-7 py-7 lg:px-4">

            <NotesToolbar onSearchChange={setSearchText}
                          searchText={searchText}
                          sort={sort}
                          onSortChange={setSort}
            />
            <div className="mb-4 flex items-baseline gap-3">
                <h2 className="font-display text-[28px] font-medium">All notes</h2>
                <span className="text-sm text-muted">{countLabel}</span>
            </div>
            {renderContent()}
        </main>
    );
};

export default NotesPage;