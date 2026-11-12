import NotesToolbar from "../components/notes/NotesToolbar.tsx";
import {useState} from "react";
import type {SortOption} from "../types/note.ts";


const NotesPage = () => {
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState<SortOption>("newest");

    return (
        <main className="mx-auto max-w-6xl px-7 py-7 lg:px-4">

            <NotesToolbar onSearchChange={setSearchText}
                          searchText={searchText}
                          sort={sort}
                          onSortChange={setSort}
            />
            <div className="mb-4 flex items-baseline gap-3">
                <h2 className="font-display text-[28px] font-medium">All notes</h2>
            </div>
        </main>
    );
};

export default NotesPage;