"use client"

import { FaArrowRightLong } from "react-icons/fa6";
import { handleNewsletter } from "@/utils/fetches";

type NewsletterFormProps = {
    className?: string;
}


export default function NewsletterForm({ className, ...rest}: NewsletterFormProps) {
    return (
        <form
            action=""
            noValidate
            onSubmit={handleNewsletter}
            className={`w-full flex items-center relative ${className ? className : ""}`}
            {...rest}
        >

            <button className="absolute right-6 z-2 hover-75">
                <FaArrowRightLong className="w-7 h-auto" />
            </button>

            <input type="email" name="newsletter" id="newsletter" placeholder="Indtast din email adresse" className="p-6 w-full bg-c-white rounded-sm" />
        </form>
    )
}