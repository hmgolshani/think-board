import {z} from "zod";

export const noteSchema = z.object({
    title: z.string().trim()
        .min(3,"Title must be at least 3 characters.")
        .max(50, "Title must be at most 50 characters."),

    content: z.string().trim()
        .min(10,"Description must be at least 10 characters.")
        .max(250, "Content must be at most 250 characters."),


})

export type NoteFormValues = z.infer<typeof noteSchema>