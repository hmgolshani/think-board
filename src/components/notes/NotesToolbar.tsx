import SearchBar from "./SearchBar.tsx";


type NotesToolbarProps = {
    searchText: string
    onSearchChange: (value: string) => void
}
const NotesToolbar = ({searchText,onSearchChange}:NotesToolbarProps) => {
    return (
        <div className=" mb-6 flex flex-row gap-3 lg:flex-col ">
            <SearchBar value={searchText} onChange={onSearchChange}/>
        </div>
    );
};

export default NotesToolbar;