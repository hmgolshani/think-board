export type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export type NoteFormData = Pick<Note, "title" | "content">

