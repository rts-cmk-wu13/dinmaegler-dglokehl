"use client"

import Form from 'next/form';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';

import { setCookie } from "@/utils/cookies";

type AuthFormProps = {
    children?: React.ReactNode
    className?: string;
    onSubmit: string;
}


export default function AuthForm({ children, className, onSubmit, ...rest}: AuthFormProps) {
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("handleLogin called");
    
        const formData = new FormData(e.currentTarget)
        const loginData = Object.fromEntries(formData.entries())
    
    
        const response = await fetch(`https://dinmaegler.onrender.com/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "identifier": loginData.email,
                "password": loginData.password
            })
        });
        const responseData = await response.json();
        console.log("responseData: ", responseData);
    
        if (responseData.jwt) {
            setCookie("loginToken", responseData.jwt)
            setCookie("userId", responseData.user.id)
            toast.success("Successfully logged in")
        }
    }

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("handleSignup called");
    
        const formData = new FormData(e.currentTarget)
        const signupData = Object.fromEntries(formData.entries())
    
    
        const response = await fetch(`https://dinmaegler.onrender.com/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": signupData.name,
                "email": signupData.email,
                "password": signupData.password
            })
        });
        const responseData = await response.json();
        console.log("responseData: ", responseData);
    
        if (responseData.jwt) {
            toast.success("Successfully signed up")
            router.push("/login")
        }
    }

    return (
        <Form action="" onSubmit={onSubmit === "handleLogin" ? handleLogin : handleSignup} noValidate className={`${className ? className : ""}`} {...rest}>
            {children}
        </Form>
    )
}