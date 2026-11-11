import type {ReactNode} from "react";

type EmptyStateProps = {
    icon: ReactNode;
    tone?: "accent" | "natural" | "danger"
    title : string;
    description : string;
    action?: ReactNode;
}

const EmptyState = ({icon, tone , title ,description,action }: EmptyStateProps )=> {
    return (
        <div className="flex flex-col items-center px-4 py-16 text-center">

            <div className={`mb-5 grid size-16 place-items-center rounded-[20px] 
            ${tone === "accent" ? "bg-accent-soft text-accent" : tone === "natural" ? "bg-line/50 text-muted" : "bg-danger-soft text-danger"}`}>
                {icon}
            </div>
            <h3 className="mb-2 font-display text-2xl font-medium">{title}</h3>
            <p className="mb-6 max-w-sm leading-relaxed text-muted">{description}</p>
            {action}
        </div>
    );
};

export default EmptyState;