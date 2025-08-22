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
        <div className="relative">
            <FaBars className="size-8 hover-75 lg:hidden" onClick={handleMenu} />

            <ul
                className={`w-fit
                ${open ? "flex flex-col p-12 absolute top-12 right-0 z-9999 rounded-sm shadow-default" : "hidden"}
                ${className ? className : ""}`}
                {...rest}>

                {children}
            </ul>
        </div>
    )
}