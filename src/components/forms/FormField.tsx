type FormFieldProps = {
    children: React.ReactElement<{ id: string, className: string }>
    className?: string;
    label: string;
}

export default function FormField({ children, className, label, ...rest}: FormFieldProps) {
    return (
        <div className={`body-1 *:last:p-3.5 *:last:w-full *:last:inset-shadow-default *:last:rounded-sm *:last:placeholder:text-c-body-2 *:last:focus:outline-0 [&>textarea]:h-45 [&>textarea]:resize-none ${className ? className : ""}`} {...rest}>
            <label htmlFor={children?.props?.id} className={`pb-2 block`}>
                {label}
            </label>

            {children}

        </div>
    )
}