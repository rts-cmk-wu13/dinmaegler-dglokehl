"use client"

import * as z from "zod";
import { toast } from 'react-toastify';

import Button from "../Button"
import FormField from "./FormField"

import { ContactSchema } from "@/api/schemas";

type ContactFormProps = {
    className?: string;

    heading?: string;
    newsletter?: boolean;
}


export default function ContactForm({ className, heading, newsletter, ...rest}: ContactFormProps) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const contactData = Object.fromEntries(formData.entries());

        const result = ContactSchema.safeParse(contactData);
        
        if (!result.success) {
            const zodError = z.flattenError(result.error);
            // console.log(zodError)
            const errorMsgs = Object.values(zodError.fieldErrors).flatMap(msgs => msgs ?? [])
            errorMsgs.forEach(msg => {
                toast.error(msg)
            })
        }

        const res = await fetch(`https://dinmaegler.onrender.com/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result.data)
        });

        const responseData = await res.json();
        console.log("responseData: ", responseData);

        if (!res.ok) {
            toast("Error submitting your message");
        }

        toast.success("yay")
    }

    return (
        <form
            action=""
            noValidate
            onSubmit={handleSubmit}
            className={`p-10 inset-shadow-default rounded-sm ${className ? className : ""}`}
            {...rest}
        >
            {heading ? (
                <h2 className="mb-3 heading-4">
                    {heading}
                </h2>
            ) : ""}

            <div className="mb-7.5 grid grid-cols-2 gap-5">
                <FormField label="Navn">
                    <input type="text" name="name" id="name" placeholder="Indtast navn" />
                </FormField>
                <FormField label="Email">
                    <input type="email" name="email" id="email" placeholder="Indtast email" />
                </FormField>
                <FormField label="Emne" className="col-span-2">
                    <input type="text" name="subject" id="subject" placeholder="Indtast emne" />
                </FormField>
                <FormField label="Besked" className="col-span-2">
                    <textarea name="message" id="message" placeholder="Skriv din besked her..."></textarea>
                </FormField>

                {newsletter ? (
                    <label htmlFor="newsletter" className="flex items-center gap-2 col-span-2 body-2">
                        <input type="checkbox" name="newsletter" id="newsletter" /> Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                    </label>
                ) : ""}
            </div>


            <Button className="!py-4 mt-7.5">
                Send besked
            </Button>
        </form>
    )
}