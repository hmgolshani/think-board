const NoteCardSkeleton = () => {
    return (
        <div className="flex min-h-48 animate-pulse flex-col gap-2.5 rounded-[14px] border border-line bg-white p-[18px]" aria-hidden={true}>
            <div className="mb-1.5 h-5 w-3/5 rounded-lg bg-line/70" />
            <div className="h-3 w-full rounded-lg bg-line/70" />
            <div className="h-3 w-11/12 rounded-lg bg-line/70" />
            <div className="h-3 w-3/5 rounded-lg bg-line/70" />
            <div className="mt-auto flex justify-between pt-3">
                <div className="h-3 w-20 rounded-lg bg-line/70" />
                <div className="h-3 w-16 rounded-lg bg-line/70" />
            </div>

        </div>
    );
};

export default NoteCardSkeleton;