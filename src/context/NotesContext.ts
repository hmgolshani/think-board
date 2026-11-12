import type {Note, NoteFormData} from "../types/note.ts";
import {createContext} from "react";

export type NotesContextValue = {
    notes: Note[];
    isLoading: boolean;
    error: string | null;
    version : number;
    reload: () => Promise<void>;
    addNote : (data:NoteFormData) => Promise<Note>;
    editNote : (data:NoteFormData , id:string) => Promise<Note>;
    removeNote : (id:string) => Promise<void>;
}

export const NotesContext = createContext<NotesContextValue | null>(null);