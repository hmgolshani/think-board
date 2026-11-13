import { useQuery} from "@tanstack/react-query";
import {getNotes} from "../api/notes.ts";

export const notesKey = ["notes"] as const;

export function useNotes() {
    return useQuery({
        queryKey: notesKey,
        queryFn: getNotes,
    });
}