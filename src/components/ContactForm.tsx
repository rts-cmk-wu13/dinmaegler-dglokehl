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
                <FormField label="Navn">
                    <input type="text" name="name" id="name" placeholder="Indtast navn" />
                </FormField>
                <FormField label="Email">
                    <input type="email" name="email" id="email" placeholder="Indtast email" />
                </FormField>
                <FormField label="Emne" className="col-span-2">
                    <input type="text" name="subject" id="subject" placeholder="Indtast emne" />
                </FormField>
                <FormField label="Besked" className="col-span-2">
                    <textarea name="message" id="message" placeholder="Skriv din besked her..."></textarea>
                </FormField>

                {newsletter ? (
                    <label htmlFor="newsletter" className="flex items-center gap-2 col-span-2 body-2">
                        <input type="checkbox" name="newsletter" id="newsletter" /> Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                    </label>
                ) : ""}
            </div>


            <input type="submit" value="Send besked" className="button hover-75 py-4 mt-7.5 rounded-xs" />
        </form>
    )
}