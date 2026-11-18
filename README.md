# Think Board

A simple notes app. Write, search, edit and delete your notes.

## Features

- Create notes with a title and a description (with live character counters)
- Edit and delete notes, with a confirmation dialog before deleting
- Note details page with its own URL
- Search notes by title or description
- Sort by newest, oldest or title (A to Z)
- Loading skeletons, empty states and error messages with retry
- Toast messages for success and failure
- Right-to-left text support (Persian notes display correctly)
- Responsive layout for mobile and desktop

## Built With

- React and TypeScript
- Vite
- Tailwind CSS (design tokens as CSS variables)
- React Router
- TanStack React Query and Axios
- React Hook Form and Zod
- Radix UI (Dialog, Alert Dialog, Select)
- React Hot Toast and Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

The API address is set in `.env` as `VITE_API_URL`.
