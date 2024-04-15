import { load } from "../storage/index.mjs";

export async function headers() {
    const accessToken = load("accessToken");
    
    if (!accessToken) {
        console.error("No access token available.");
        throw new Error("No access token available");
    }
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
    }
}

export async function authFetch(url, options) {
    const resolvedHeaders = await headers(); 

    return fetch(url, {
        ...options,
        headers: resolvedHeaders
    })
}
