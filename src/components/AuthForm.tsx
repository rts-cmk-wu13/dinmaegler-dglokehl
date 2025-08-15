"use client"

import Form from 'next/form';
import { handleLogin, handleSignup } from "@/api/auth";

type AuthFormProps = {
    children?: React.ReactNode
    className?: string;
    onSubmit: string;
}


export default function AuthForm({ children, className, onSubmit, ...rest}: AuthFormProps) {
    if (onSubmit === "handleLogin") {
        return (
            <Form action="" onSubmit={handleLogin} noValidate className={`${className ? className : ""}`} {...rest}>
                {children}
            </Form>
        )
    }
    if (onSubmit === "handleSignup") {
        return (
            <Form action="" onSubmit={handleSignup} noValidate className={`${className ? className : ""}`} {...rest}>
                {children}
            </Form>
        )
    }
}