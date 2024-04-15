import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import * as listeners from "./handlers/index.mjs"

const path = location.pathname;

if (path === "/profile/login/") {
    listeners.setLoginFormListenter();
} else if (path === "/profile/register/") {
    listeners.setRegisterFormListenter();
} else if (path === "/profile/edit/") {
    listeners.setUpdateProfileListenter();
} else if (path === "/post/create/") {
    listeners.setCreatePostListener();
} else if (path === "/post/edit/") {
    listeners.setUpdatePostListenter();
} else if (path === "/") {
    listeners.setLoginFormListenter();
} else if (path === "/posts/") {
    testTemplate();
} else {
    console.log("I'm not going to do anything because I'm not on the login or register page");
}

//Rendering the post(s)
async function testTemplate() {
    console.log("I'm on the posts page");
    const posts = await postMethods.getPosts();

    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
    console.log(posts);
}

/* createPost( {
    title: "examplasdf",
    body: "heuhjeg"
}) */

//post.removePost(11685)

//post.getPosts().then(console.log);
//post.getPost(1168).then(console.log);


