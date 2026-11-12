import SearchBar from "./SearchBar.tsx";
import type {SortOption} from "../../types/note.ts";
import SortSelect from "./SortSelect.tsx";


type NotesToolbarProps = {
    searchText: string
    onSearchChange: (value: string) => void
    sort :SortOption
    onSortChange: (value: SortOption) => void
}
const NotesToolbar = ({searchText,onSearchChange ,sort , onSortChange}:NotesToolbarProps) => {
    return (
        <div className=" mb-6 flex flex-col gap-3 lg:flex-row ">
            <SearchBar value={searchText} onChange={onSearchChange}/>
            <SortSelect value={sort} onChange={onSortChange}/>
        </div>
    );
};

export default NotesToolbar;