import { getCookie } from "./cookies"
import { getUserData } from "./fetches"

export async function getUserObj() {
    const loginToken = await getCookie("loginToken")
    if (loginToken) {
        const userData = await getUserData(loginToken.value)
        const userObj = {
            loginToken: loginToken.value,
            userData: userData
        }
        return userObj
    }
    return
}