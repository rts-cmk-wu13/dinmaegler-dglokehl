type PageHeadingProps = {
    className?: string;
    heading: string
}


export default function PageHeading({ className, heading, ...rest}: PageHeadingProps) {
    return (
        <div className={`w-full relative grid place-items-center ${className ? className : ""}`} {...rest}>
            <h1 className="heading-main absolute z-9">
                {heading}
            </h1>

            <figure className="w-full h-48 bg-c-multiply-1">
                <img src="/page_heading_bg.jpg" alt="" className="size-full object-cover mix-blend-multiply" />
            </figure>
        </div>
    )
}