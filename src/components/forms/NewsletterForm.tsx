"use client"

import Form from "next/form";
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
        console.log(formData, newsletterData)

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
            toast.error("Please enter a valid email address");
        } else {
            toast.success("Du er nu tilmeldt vores nyhedsbrev");
        }
    }


    return (
        <Form
            action=""
            noValidate
            onSubmit={handleNewsletter}
            className={`w-full flex items-center relative ${className ? className : ""}`}
            {...rest}
        >

            <button className="absolute right-5 max-sm:right-4 z-2 hover-75">
                <FaArrowRightLong className="size-7 text-c-primary-1" />
            </button>

            <input type="email" name="newsletter" id="newsletter" placeholder="Indtast din email adresse" className="p-5 pr-16 max-sm:p-4 max-sm:pr-14 w-full bg-c-white rounded-sm focus:outline-0" />
        </Form>
    )
}