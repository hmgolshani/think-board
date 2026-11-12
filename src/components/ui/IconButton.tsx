import type {ButtonHTMLAttributes, ReactNode} from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string; // read by screen readers and shown as a tooltip
    icon: ReactNode;
    danger?: boolean;
};

const IconButton = ({ label, icon, danger = false, className = "", ...rest }: IconButtonProps) => {
    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            className={`grid size-9 cursor-pointer place-items-center rounded-lg text-muted transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                danger ? "hover:bg-danger-soft hover:text-danger" : "hover:bg-line/50 hover:text-ink"
            } ${className}`}
            {...rest}
        >
            {icon}
        </button>
    );
};

export default IconButton;
