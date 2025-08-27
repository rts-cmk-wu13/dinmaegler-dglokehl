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
    bg?: boolean;
}


export default function SectionDefault({ children, className, obj, bg, ...rest}: SectionDefaultProps) {
    return (
        <section className={`py-32 max-sm:py-12 flex flex-col items-center *:w-full ${bg ? "bg-c-bg-1" : ""}`} {...rest}>
            <div className={`centered-default flex flex-col items-center gap-14 max-sm:gap-8 ${className ? className : ""}`} {...rest}>
                <div className="text-center">
                    <h2 className="mb-4 max-sm:mb-2 heading-1">
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
            </div>
        </section>
    )
}