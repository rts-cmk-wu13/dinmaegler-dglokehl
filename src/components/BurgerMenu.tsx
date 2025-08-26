"use client"

import { useState } from "react";
import { FaBars } from "react-icons/fa6";

type BurgerMenuProps = {
    children?: React.ReactNode
    className?: string;
}

export default function BurgerMenu({ children, className, ...rest}: BurgerMenuProps) {
    const [open, setOpen] = useState(false);

    const handleMenu = (e: any) => {
        setOpen(!open)
    }

    return (
        <div>
            <FaBars className="size-8 hover-75 text-c-primary-1 lg:hidden" onClick={handleMenu} />

            <ul
                className={`
                ${open ? "w-screen flex flex-col items-center p-12 fixed inset-x-0 top-38 z-999 bg-c-primary-1 heading-2 text-c-white" : "hidden"}
                ${className ? className : ""}`}
                {...rest}>

                {children}
            </ul>
        </div>
    )
}