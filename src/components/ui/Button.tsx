import type { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "dangerOutline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    isLoading?: boolean;
    icon?: ReactNode;
};

const variants: Record<Variant, string> = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    secondary: "border border-line bg-white text-ink hover:bg-cream",
    ghost: "text-muted hover:bg-line/40 hover:text-ink",
    danger: "bg-danger text-white hover:bg-danger/90",
    dangerOutline: "border border-danger/30 bg-white text-danger hover:bg-danger-soft",
};

const Button = ({variant = "primary", isLoading = false, icon,
                    disabled, children, className = "", ...rest}: ButtonProps) => {
    return (
        <button type="button"
            disabled={disabled || isLoading}
            className={`inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-4 text-[15px] font-semibold 
            whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70
             ${variants[variant]} ${className}`}

            {...rest}
        >
            {isLoading ? <Spinner /> : icon}
            {children}
        </button>
    );
};

export default Button;
