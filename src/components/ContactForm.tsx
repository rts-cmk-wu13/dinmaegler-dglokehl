import FormField from "./FormField"

type ContactFormProps = {
    children?: React.ReactNode
    className?: string;

    heading?: string;
    newsletter?: boolean;
}

export default function ContactForm({ children, className, heading, newsletter, ...rest}: ContactFormProps) {
    return (
            <form action="" className={`p-10 inset-shadow-default ${className ? className : ""}`} {...rest}>
                {heading ? (
                    <h2 className="mb-3 heading-4">
                        {heading}
                    </h2>
                ) : ""}

                <div className="grid grid-cols-2 gap-5">
                    <FormField obj={{ type: "text", name: "name", placeholder: "Indtast navn", label: "Navn" }} />
                    <FormField obj={{ type: "email", name: "email", placeholder: "Indtast email", label: "Email" }} />
                    <FormField obj={{ type: "text", name: "subject", placeholder: "Indtast emne", label: "Emne" }} className="col-span-2" />
                    <FormField obj={{ type: "textarea", name: "message", placeholder: "Skriv din besked her...", label: "Besked" }} className="col-span-2" />

                    {newsletter ? (
                        <label htmlFor="newsletter" className="flex items-center gap-2 col-span-2 body-2">
                            <input type="checkbox" name="newsletter" id="newsletter" /> Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                        </label>
                    ) : ""}
                </div>


                <input type="submit" value="Send besked" className="button py-4 mt-7.5 rounded-xs" />
            </form>
    )
}