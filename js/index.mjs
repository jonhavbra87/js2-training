import { setLoginFormListenter } from "./handlers/login.mjs";
import { setRegisterFormListenter } from "./handlers/register.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

//setLoginFormListenter();
if (path === "/profile/login/") {
    setLoginFormListenter();
} else if (path === "/profile/register/") {
    setRegisterFormListenter();
} else {
    console.log("I'm not going to do anything because I'm not on the login or register page");
}


/* createPost( {
    title: "examplasdf",
    body: "heuhjeg"
}) */

//post.removePost(11685)

//post.getPosts().then(console.log);
//post.getPost(1168).then(console.log);