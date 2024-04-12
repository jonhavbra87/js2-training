//import { API_AUTH, API_REGISTER, API_BASE_URL_V2 } from "../constants.mjs";

import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  console.log(registerURL);

  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
  return result;
}
