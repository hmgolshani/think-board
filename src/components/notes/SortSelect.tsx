import type {SortOption} from "../../types/note.ts";
import {ChevronDown} from "lucide-react";

type SortSelectProps = {
    value: SortOption
    onChange: (value: SortOption) => void
}

const SortSelect = ({value, onChange}: SortSelectProps) => {
    return (
        <div className="relative sm:w-44">
            <select aria-label="Sort notes"
                    value={value}
                    onChange={(e) => onChange(e.target.value as SortOption)}
                    className="h-11 w-full cursor-pointer appearance-none rounded-[10px] border border-line
                    bg-white pr-10 pl-3.5 text-[15px] outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/20"
            >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>

            </select>

            <ChevronDown size={18}
                         aria-hidden={true}
                         className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted"
            />
        </div>
    );
};

export default SortSelect;