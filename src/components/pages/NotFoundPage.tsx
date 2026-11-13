import { ArrowLeft, FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmptyState from "../ui/EmptyState.tsx";
import Button from "../ui/Button.tsx";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <main className="mx-auto max-w-6xl px-4 py-7 sm:px-7">
            <EmptyState icon={<FileQuestion size={28} aria-hidden="true" />}
                title="Page not found"
                description="The address you opened does not exist."
                action={
                    <Button variant="secondary" icon={<ArrowLeft size={18} aria-hidden="true" />} onClick={() => navigate("/")}>
                        Back to all notes
                    </Button>
                }
            />
        </main>
    );
};

export default NotFoundPage;
