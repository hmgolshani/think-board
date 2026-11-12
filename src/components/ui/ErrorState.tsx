import EmptyState from "./EmptyState.tsx";
import {CloudOff} from "lucide-react";
import Button from "./Button.tsx";

type ErrorStateProps = {
    title: string;
    message: string;
    onRetry: () => void;
}

const ErrorState = ({title, message, onRetry}:ErrorStateProps) => {
    return (
        <EmptyState tone={"danger"}
                    icon={<CloudOff size={28} aria-hidden={true}/>}
                    title={title}
                    description={message}
                    action={<Button onClick={onRetry}>Try again</Button>}
        />

    );
};

export default ErrorState;