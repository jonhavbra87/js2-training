import { setLoginFormListenter } from "./handlers/login.mjs";
import { setRegisterFormListenter } from "./handlers/register.mjs";

const path = location.pathname;
console.log(path);

//setLoginFormListenter();
if (path === "/profile/login/") {
    setLoginFormListenter();
} else if (path === "/profile/register/") {
    setRegisterFormListenter();
} else {
    console.log("I'm not going to do anything because I'm not on the login or register page");
}

