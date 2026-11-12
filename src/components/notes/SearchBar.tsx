import {Search, X} from "lucide-react";

type SearchBarProps = {
    value: string
    onChange: (value: string) => void
}
const SearchBar = ({value, onChange}: SearchBarProps) => {
    return (
        <div className="relative flex-1">
            <Search size={18}
                    aria-hidden={true}
                    className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted"/>

            <input type="text"
                   dir="auto"
                   aria-label="Search notes"
                   placeholder="Search notes..."
                   value={value}
                   onChange={(e) => onChange(e.target.value)}
                   className="h-11 w-full rounded-[10px] border border-line bg-white pr-10 pl-10 text-[15px]
                    outline-none placeholder:text-muted focus:border-accent
                    focus:ring-[3px] focus:ring-accent/20"
            />

            {value !== "" && (
                <button type="button"
                        aria-label="Clear search"
                        onClick={() => onChange("")}
                        className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 cursor-pointer
                         place-items-center rounded-md text-muted hover:bg-line/50 hover:text-ink"
                >
                    <X size={16} aria-hidden={true} />
                </button>
            )}

        </div>
    );
};

export default SearchBar;