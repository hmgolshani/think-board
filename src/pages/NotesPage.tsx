import NotesToolbar from "../components/notes/NotesToolbar.tsx";
import {useState} from "react";
import type { SortOption} from "../types/note.ts";
import {filterNotes, sortNotes} from "../utils/notes.ts";
import ErrorState from "../components/ui/ErrorState.tsx";
import EmptyState from "../components/ui/EmptyState.tsx";
import Button from "../components/ui/Button.tsx";
import {FileText, Plus, Search} from "lucide-react";
import NoteCard from "../components/notes/NoteCard.tsx";
import NoteCardSkeleton from "../components/notes/NoteCardSkeleton.tsx";
import {useNotes} from "../hooks/useNotes.ts";
import {getErrorMessage} from "../utils/getErrorMessage.ts";
import NoteFormDialog from "../components/notes/NoteFormDialog.tsx";


const NotesPage = () => {

    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState<SortOption>("newest");

    const {data: notes = [], isLoading, error, refetch} = useNotes();

    const visibleNotes = sortNotes(filterNotes(notes, searchText), sort);

    const countLabel = isLoading
        ? "Loading…"
        : searchText.trim() !== ""
            ? `${visibleNotes.length} ${visibleNotes.length === 1 ? "result" : "results"}`
            : `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;

    const renderContent = () => {

        if (error) return <ErrorState message={getErrorMessage(error)}
                                      onRetry={() => refetch()}
        />;

        if (isLoading) {
            return (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({length: 6}, (_, index) => (
                        <NoteCardSkeleton key={index}/>
                    ))}
                </div>
            );
        }

        if (notes.length === 0) {
            return (
                <EmptyState
                    tone="accent"
                    icon={<FileText size={28} aria-hidden="true"/>}
                    title="No notes yet"
                    description="Capture a thought, a plan or a link. Your first note takes a few seconds."
                    action={
                        <NoteFormDialog
                            trigger={
                                <Button icon={<Plus size={18} aria-hidden="true"/>} >
                                    Create your first note
                                </Button>
                            }
                        />
                    }
                />
            );
        }

        if (visibleNotes.length === 0) {
            return (
                <EmptyState
                    icon={<Search size={28} aria-hidden="true"/>}
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
                    <NoteCard key={note.id} note={note} />
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