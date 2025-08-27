import Image from "next/image";
import PageHeadingImage from "@/assets/img/page_heading_bg.jpg"

type PageHeadingProps = {
    className?: string;
    heading: string
}


export default function PageHeading({ className, heading, ...rest}: PageHeadingProps) {
    return (
        <div className={`py-14 max-sm:py-8 w-full relative grid place-items-center ${className ? className : ""}`} {...rest}>
            <h1 className="heading-main text-center">
                {heading}
            </h1>

            <figure className="size-full bg-c-multiply-1 absolute -z-1">
                <Image src={PageHeadingImage} alt="Bygning baggrundsbillede" className="size-full object-cover mix-blend-multiply" />
            </figure>
        </div>
    )
}