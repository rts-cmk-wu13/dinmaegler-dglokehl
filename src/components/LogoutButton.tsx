"use client"

import { deleteCookie } from "@/utils/cookies"
import { useRouter } from 'next/navigation'

type LogoutButtonProps = {
    children?: React.ReactNode
    className?: string;
}

export default function LogoutButton({ children, className, ...rest}: LogoutButtonProps) {
    const router = useRouter()

    const handleLogout = (e: any) => {
        e.preventDefault()
        console.log("logoutButton")

        deleteCookie("loginToken")
        deleteCookie("userId")
        router.refresh()
    }

    return (
        <button className={`cursor-pointer ${className ? className : ""}`} onClick={handleLogout} {...rest}>
            Log ud
        </button>
    )
}