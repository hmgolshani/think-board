import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {NoteFormData} from "../types/note.ts";
import toast from "react-hot-toast";
import {createNote, deleteNote, updateNote} from "../api/notes.ts";
import {getErrorMessage} from "../utils/getErrorMessage.ts";
import {notesKey} from "./useNotes.ts";

export function useCreateNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: NoteFormData) => createNote(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: notesKey });
            toast.success("Note created");
        },
        onError: (error) => {
            toast.error(getErrorMessage(error));
        },
    });
}

export function useUpdateNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: NoteFormData }) => updateNote(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: notesKey });
            toast.success("Note updated");
        },
        onError: (error) => {
            toast.error(getErrorMessage(error));
        },
    });
}

export function useDeleteNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteNote(id),
        onSuccess: () => {
            // exact: only the list. The deleted note's own detail data is not asked again.
            queryClient.invalidateQueries({ queryKey: notesKey, exact: true });
            toast.success("Note deleted");
        },
        onError: (error) => {
            toast.error(getErrorMessage(error));
        },
    });
}
