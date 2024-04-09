import { register } from "../api/auth/register.mjs"

export function setRegisterFormListenter() {
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())
        console.log("I'm going to register the user with the following data: ", profile)

        //Send it to the API (code is in auth/register.mjs)

        register(profile);
    })
}


/*

//This is a way to do it, but it's not the best.

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


We could also do it this way, but it's not the best way to do it. Ref Oliver Dipple ;)
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const banner = form.banenr.value;
    const avatar = form.avatar.value;  

const profile = {
    name,
    email,
    password,
    banner,
    avatar,
 */