"use client"
import Link from "next/link";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: (e: any) => void;

    target?: string;
}


export default function Button({ children, href, onClick, className, ...rest}: ButtonProps) {

    const buttonStyle = "px-8 py-4 flex items-center justify-center gap-2 bg-c-primary-1 text-c-white rounded-sm cursor-pointer hover-75"

    if (href) {
        return (
            <Link href={href} className={`${buttonStyle} ${className ? className : ""}`} {...rest}>
                {children}
            </Link>
        )
    } else {
        return (
            <button className={`${buttonStyle} ${className ? className : ""}`} onClick={onClick} {...rest}>
                {children}
            </button>
        )
    }
}