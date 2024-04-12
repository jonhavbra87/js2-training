import { login } from "../api/auth/login.mjs"

export function setLoginFormListenter() {
    const form = document.querySelector("#loginForm");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            console.log("I'm going to login the user with the following data: ", profile)


            login(profile);
        })
    }
}