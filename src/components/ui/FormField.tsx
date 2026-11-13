import type {ReactNode} from "react";

type FormFieldProps = {
    label: string;
    htmlFor: string;
    error?: string;
    children: ReactNode;
}
const FormField = ({label, htmlFor, error, children}: FormFieldProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={htmlFor}
                   className="mb-1.5 block text-sm font-semibold"
            >
                {label}
            </label>
            {children}
            {error &&
                <p id={`${htmlFor}-error`}
                   role="alert"
                   className="mt-1.5 text-[13.5px] text-danger"
                >
                    {error}
                </p>

            }
        </div>
    );
};

export default FormField;