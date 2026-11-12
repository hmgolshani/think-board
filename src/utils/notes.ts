import type { Note, SortOption } from "../types/note";

export function filterNotes(notes: Note[], searchText: string): Note[] {
    const query = searchText.trim().toLowerCase();
    if (query === "") return notes;
    return notes.filter(
        (note) =>
            note.title.toLowerCase().includes(query) ||
            note.content.toLowerCase().includes(query),
    );
}
export function sortNotes(notes: Note[], sort: SortOption): Note[] {
    const copy = [...notes];
    switch (sort) {
        case "newest":
            return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        case "oldest":
            return copy.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
}
