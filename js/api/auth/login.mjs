import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

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

const { accessToken, ...user } = await response.json();

storage.save("accessToken", accessToken);

storage.save("profile", user);

alert("You have been logged in successfully");

// This line will execute if response.ok is false
//throw new Error(response.statusText);
}
