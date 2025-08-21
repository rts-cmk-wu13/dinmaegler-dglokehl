import { redirect } from "next/navigation";
import { toast } from 'react-toastify';
import { setCookie } from "@/utils/cookies";

type LoginDataProps = {
    email: string;
    password: string;
}

type SignupDataProps = {
    name: string;
    email: string;
    password: string;
}


export async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("handleLogin called");

    const formData = new FormData(e.currentTarget)
    const loginData = Object.fromEntries(formData.entries()) as LoginDataProps;


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


export async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("handleSignup called");

    const formData = new FormData(e.currentTarget)
    const signupData = Object.fromEntries(formData.entries()) as SignupDataProps;


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
        redirect(`/login`)
    }
}