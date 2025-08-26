import Button from "../Button"

type SectionDefaultProps = {
    children?: React.ReactNode
    className?: string;
    obj: {
        heading: string;
        subheading: string;
        href: string;
        button: string;
    }
}


export default function SectionDefault({ children, className, obj, ...rest}: SectionDefaultProps) {
    return (
        <section className={`centered-default flex flex-col items-center gap-14 ${className ? className : ""}`} {...rest}>
            <div className="text-center">
                <h2 className="mb-4 heading-1">
                    {obj.heading}
                </h2>
                <p className="body-1">
                    {obj.subheading}
                </p>
            </div>

            {children}

            <Button href={obj.href} className="!py-4">
                {obj.button}
            </Button>
        </section>
    )
}