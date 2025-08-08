type FormFieldProps = {
    children?: React.ReactNode
    className?: string;
    obj: {
        type: string;
        name: string;
        placeholder: string;
        label: string;
        labelClass?: string;
        inputClass?: string;
    }
}

export default function FormField({ children, className, obj, ...rest}: FormFieldProps) {
    return (
        <div className={`body-1 ${className ? className : ""}`} {...rest}>
            <label htmlFor={obj.name} className={`pb-2 block ${obj.labelClass ? obj.labelClass : ""}`}>
                {obj.label}
            </label>

            {obj.type === "textarea" ? (
                <textarea name={obj.name} id={obj.name} placeholder={obj.placeholder} className={`p-3.5 w-full h-45 inset-shadow-default rounded-xs resize-none placeholder:text-c-body-2 focus:outline-0 ${obj.inputClass ? obj.inputClass : ""}`}></textarea>
            ) : (
                <input type={obj.type} name={obj.name} id={obj.name} placeholder={obj.placeholder} className={`p-3.5 w-full inset-shadow-default rounded-xs placeholder:text-c-body-2 focus:outline-0 ${obj.inputClass ? obj.inputClass : ""}`} />
                )
            }
            
        </div>
    )
}