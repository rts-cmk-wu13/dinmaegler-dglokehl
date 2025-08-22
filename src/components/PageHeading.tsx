import Image from "next/image";
import PageHeadingImage from "@/assets/img/page_heading_bg.jpg"

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
                <Image src={PageHeadingImage} alt="Bygning baggrundsbillede" className="size-full object-cover mix-blend-multiply" />
            </figure>
        </div>
    )
}