import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/** 
 * API call that register the user
 * @param {Object} profile - The user profile to register
 * @param {string} registerURL - Fetches the result of the API call
 * @returns {Promise} response - The result of the API call
 * @throws {Error} result - The error which was thrown during the API call
 * ```js
 * register(registerURL, profile)
 * ```
 * **/

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
  alert("You have been registered in successfully");
  return result;
}
