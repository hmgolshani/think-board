import type {ApiSuccess, Note, NoteFormData} from "../types/note.ts";
import {apiClient} from "./clinet.ts";

//all note
export async function getNotes(): Promise<Note[]> {
    const {data} = await apiClient.get<ApiSuccess<Note[]>>('/notes');
    return data.response;
}

//one note
export async function getNote (id: string): Promise<Note> {
    const {data} = await apiClient.get<ApiSuccess<Note>>(`/notes/${id}`);
    return data.response
}

// create
export async function createNote(note: NoteFormData): Promise<Note> {
    const {data} = await apiClient.post<ApiSuccess<Note>>("/notes", note);
    return data.response;
}

//update
export async function updateNote(id: string, formData: NoteFormData): Promise<Note> {
    const { data } = await apiClient.put<ApiSuccess<Note>>(`/notes/${id}`, formData);
    return data.response;
}

//delete
export async function deleteNote(id: string): Promise<void> {
    await apiClient.delete(`/notes/${id}`);

}