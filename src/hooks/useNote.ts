import {useQuery} from "@tanstack/react-query";
import {notesKey} from "./useNotes.ts";
import {getNote} from "../api/notes.ts";
import {isNotFoundError} from "../utils/getErrorMessage.ts";


export function useNote(id:string |undefined) {
    return useQuery({
        queryKey: [...notesKey, id],
        queryFn: () => getNote(id!),
        enabled: id !== undefined,
        retry: (failureCount, error) => !isNotFoundError(error) && failureCount < 1,

    })
}