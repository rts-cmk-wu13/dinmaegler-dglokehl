export function addToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getFromStorage(key: string) {
    localStorage.getItem(key)
}

export function removeFromStorage(key: string) {
    localStorage.removeItem(key)
}