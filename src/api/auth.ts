import { setCookie } from "@/utils/cookies";
import { getUserData } from "@/utils/fetches";

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
        const userData = await getUserData(responseData.jwt)
        if (userData) {
            setCookie("loginToken", responseData.jwt)
            setCookie("userId", userData.id)
        }
    }
}


export async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("handleSignup called");

    const formData = new FormData(e.currentTarget)
    const signupData = Object.fromEntries(formData.entries()) as SignupDataProps;


    const response = await fetch(`https://dinmaegler.onrender.com/register/local`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": signupData.name,
            "identifier": signupData.email,
            "password": signupData.password
        })
    });
    const responseData = await response.json();
    console.log("responseData: ", responseData);
}