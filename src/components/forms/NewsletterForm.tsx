"use client"

import { toast } from 'react-toastify';
import { FaArrowRightLong } from "react-icons/fa6";

type NewsletterFormProps = {
    className?: string;
}


export default function NewsletterForm({ className, ...rest}: NewsletterFormProps) {

    const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const newsletterData = Object.fromEntries(formData.entries());

        const res = await fetch(`https://dinmaegler.onrender.com/subscribers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": newsletterData.newsletter
            })
        });

        const responseData = await res.json();
        console.log("responseData: ", responseData);

        if (!res.ok) {
            toast("Please enter a valid email address");
        }
    }


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

            <input type="email" name="newsletter" id="newsletter" placeholder="Indtast din email adresse" className="p-6 w-full bg-c-white rounded-sm focus:outline-0" />
        </form>
    )
}