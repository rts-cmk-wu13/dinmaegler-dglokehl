import { getCookie } from "./cookies"
import { getUserData } from "./fetches"


export async function getUserObj() {
    const loginToken = await getCookie("loginToken")
    if (loginToken) {
        const userData = await getUserData()
        const userObj = {
            loginToken: loginToken.value,
            userData: userData
        }
        return userObj
    }
    return
}


export function formatPrice(num: number) {
    const formattedNum = new Intl.NumberFormat("da-DK", { style: "decimal" }).format(num)
    return formattedNum
}


export function formatRemoveDecimals(num: number) {
    const formattedNum = new Intl.NumberFormat("da-DK", { style: "decimal", maximumFractionDigits: 0 }).format(num)
    return formattedNum
}