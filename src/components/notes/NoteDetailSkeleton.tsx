const NoteDetailSkeleton = () => {
    return (
        <div className="max-w-3xl animate-pulse"
             aria-hidden="true"
        >
            <div className="mb-4 h-9 w-2/3 rounded-lg bg-line/70" />
            <div className="mb-8 h-3 w-40 rounded-lg bg-line/70" />
            <div className="mb-3 h-3.5 w-full rounded-lg bg-line/70" />
            <div className="mb-3 h-3.5 w-11/12 rounded-lg bg-line/70" />
            <div className="h-3.5 w-3/5 rounded-lg bg-line/70" />
        </div>
    );
};

export default NoteDetailSkeleton;
