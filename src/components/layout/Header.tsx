import {Plus} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../ui/Button";

type HeaderProps = {
    onNewNote: () => void;
};

const Header = ({onNewNote}: HeaderProps) => {
    return (
        <header className="border-b border-line">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-7">

                {/*logo */}
                <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-semibold">

          <span className="grid items-center size-7 place-content-center gap-1 rounded-lg bg-accent" aria-hidden="true">
            <span className="h-0.5 w-3.5 rounded bg-white"/>
            <span className="h-0.5 w-3.5 rounded bg-white"/>
          </span>
                    Think Board
                </Link>

                <Button onClick={onNewNote} icon={<Plus size={18} aria-hidden="true"/>} aria-label="New note">
                    <span className="hidden sm:inline">New note</span>
                </Button>

            </div>
        </header>
    );
};

export default Header;
