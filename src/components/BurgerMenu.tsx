"use client"

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";

type BurgerMenuProps = {
    children?: React.ReactNode
    className?: string;
}

export default function BurgerMenu({ children, className, ...rest}: BurgerMenuProps) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const handleMenu = (e: any) => {
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            setOpen(!open)
        }
    }, [pathname])


    return (
        <div>
            <FaBars className="size-8 hover-75 text-c-primary-1 lg:hidden" onClick={handleMenu} />

            <ul
                className={`
                ${open ? "w-screen flex flex-col items-center gap-5 p-10 fixed inset-x-0 top-header-default max-sm:top-header-mobile z-999 bg-c-primary-1 heading-3 text-c-white" : "hidden"}
                ${className ? className : ""}`}
                {...rest}>

                {children}
            </ul>
        </div>
    )
}