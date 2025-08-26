import { getCookie } from "@/utils/cookies"

import { HomeProps } from "@/types/homes"
import { AgentProps } from "@/types/agents"
import { UserDataProps } from "@/types/users"


export async function getHomesData (link: string) {
    const res = await fetch(link, { cache: "force-cache", next: { revalidate: 3600 } })
    const homes: HomeProps[] = await res.json()

    if (!res.ok) {
        throw new Error ("Error fetching results")
    }

    return homes
}

export async function getAgentsData (link: string) {
    const res = await fetch(link, { cache: "force-cache", next: { revalidate: 3600 } })
    const agents: AgentProps[] = await res.json()

    if (!res.ok) {
        throw new Error ("Error fetching results")
    }

    return agents
}



export async function getHomeData (id: string) {
    const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`, { cache: "force-cache", next: { revalidate: 3600 } })
    const home: HomeProps = await res.json()

    if (!res.ok) {
        throw new Error ("Error fetching results")
    }

    return home
}

export async function getAgentData (id: string) {
    const res = await fetch(`https://dinmaegler.onrender.com/agents/${id}`, { cache: "force-cache", next: { revalidate: 3600 } })
    const agent: AgentProps = await res.json()

    if (!res.ok) {
        throw new Error ("Error fetching results")
    }

    return agent
}


export async function getUserObj() {
    const loginToken = await getCookie("loginToken")
    if (loginToken) {
        const response = await fetch(`https://dinmaegler.onrender.com/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + loginToken.value
            }
        });
        const userData = await response.json();
        const userObj: UserDataProps = {
            loginToken: loginToken.value,
            userData: userData
        }
        return userObj
    }
    return
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