export function formatPrice(num: number) {
    const formattedNum = new Intl.NumberFormat("da-DK", { style: "decimal" }).format(num)
    return formattedNum
}


export function formatRemoveDecimals(num: number) {
    const formattedNum = new Intl.NumberFormat("da-DK", { style: "decimal", maximumFractionDigits: 0 }).format(num)
    return formattedNum
}