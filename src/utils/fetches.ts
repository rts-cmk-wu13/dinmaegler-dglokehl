import { setCookie, getCookie } from "./cookies";


export async function getUserData (loginToken: string) {
    const response = await fetch(`https://dinmaegler.onrender.com/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + loginToken
        }
    });
    const responseData = await response.json();

    return responseData
}


export async function addToFavorites (homesArray: string[], loginToken: any, userId: string) {
    if (loginToken && userId) {
        const response = await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + loginToken
            },
            body: JSON.stringify({
                "homes": homesArray
            })
        });
        const responseData = await response.json();
        console.log("responseData", responseData);
    }
}