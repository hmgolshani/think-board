export type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export type NoteFormData = Pick<Note, "title" | "content">

export type SortOption = "newest" | "oldest"

export type ApiSuccess<T>={
    success: true
    response :T
    status : number
}

export type ApiError={
    success: false
    error: string
    status : number
}