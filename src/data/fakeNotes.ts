import type {Note} from "../types/note.ts";

export const fakeNotes: Note[] = [
    {
        id: "1",
        title: "Weekly planning",
        content:
            "Finish the API layer for Think Board, review pull requests, and block two hours on Thursday for deep work. Remember to push before the deadline.",
        createdAt: "2026-11-09T09:00:00.000Z",
        updatedAt: "2026-11-09T09:00:00.000Z",
    },
    {
        id: "2",
        title: "Book ideas",
        content:
            "The Pragmatic Programmer, Refactoring UI, and that long article on state machines. Read one chapter every evening.",
        createdAt: "2026-11-08T20:30:00.000Z",
        updatedAt: "2026-11-08T20:30:00.000Z",
    },
    {
        id: "3",
        title: "Grocery list",
        content: "Oats, olive oil, lemons, yogurt, green tea, and something sweet for the weekend.",
        createdAt: "2026-11-07T11:15:00.000Z",
        updatedAt: "2026-11-07T11:15:00.000Z",
    },
    {
        id: "4",
        title: "Design sync",
        content:
            "Agreed on the minimal card style: one accent colour, soft borders, no heavy shadows. Next step is the empty and error states.",
        createdAt: "2026-11-06T15:45:00.000Z",
        updatedAt: "2026-11-06T15:45:00.000Z",
    },
    {
        id: "5",
        title: "Learn React Query",
        content:
            "useQuery for reading, useMutation for writing, and invalidateQueries to refresh the list after a change.",
        createdAt: "2026-11-05T08:00:00.000Z",
        updatedAt: "2026-11-05T08:00:00.000Z",
    },
    {
        id: "6",
        title: "یادداشت فارسی",
        content: "این یک یادداشت فارسی است تا ببینیم متن راست‌به‌چپ درست نمایش داده می‌شود.",
        createdAt: "2026-11-03T17:20:00.000Z",
        updatedAt: "2026-11-03T17:20:00.000Z",
    },
];
