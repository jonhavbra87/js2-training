import { API_BASE_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_BASE_URL + action;
    
    console.log(registerURL);
}