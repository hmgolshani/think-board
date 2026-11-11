import {useParams} from "react-router-dom";

const NoteDetailPage = () => {
    const {id}  = useParams()

    return (
        <main className="mx-auto max-w-6xl px-7 py-7 lg:px-4">
            <h2 className="font-display text-[28px] font-medium">Note {id}</h2>
        </main>
    );
};

export default NoteDetailPage;