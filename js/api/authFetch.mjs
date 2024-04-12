import { load } from "../storage/index.mjs";

export async function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options) {
    const resolvedHeaders = await headers(); 

    return fetch(url, {
        ...options,
        headers: resolvedHeaders
    })
}
