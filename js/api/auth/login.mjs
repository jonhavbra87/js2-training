import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;
    console.log(loginURL);

    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body
})

if (response.ok) {
    return await response.json();
    console.log(response);
}
// This line will execute if response.ok is false
throw new Error(response.statusText);
}
