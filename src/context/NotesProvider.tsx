import {type ReactNode, useState} from "react";
import {NotesContext} from "./NotesContext.ts";
import {fakeNotes} from "../data/fakeNotes.ts";
import type {Note, NoteFormData} from "../types/note.ts";

type NoteProviderProps = {
    children: ReactNode;
}

const NotesProvider = ({children}: NoteProviderProps) => {
    const [notes, setNotes] = useState<Note[]>(fakeNotes);

    const isLoading = false;
    const error: string | null = null;
    const version = 0;
    const reload = async () => {
    };

    const addNote = async (data: NoteFormData) => {
        const now = new Date().toISOString();

        const newNote: Note = {
            id: crypto.randomUUID(),
            title: data.title,
            content: data.content,
            createdAt: now,
            updatedAt: now
        }
        setNotes((prev) => [newNote, ...prev]);
        return newNote;
    }

    const editNote = async (data: NoteFormData, id: string) => {
        const oldNote = notes.find((note) => note.id === id);

        if (!oldNote) throw new Error("Note not found.");

        const updatedNote: Note = {
            ...oldNote,
            ...data,
            updatedAt: new Date().toISOString(),
        }

        setNotes((prev) => prev.map((note) => (note.id === id ? updatedNote : note)))

        return updatedNote
    }

    const removeNote = async (id: string) => {
        setNotes((prev) => prev.filter((note) => note.id !== id))
    }


    return (
        <NotesContext.Provider value={{notes, isLoading, error, version, reload, addNote, editNote, removeNote}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;