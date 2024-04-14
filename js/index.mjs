import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import * as listeners from "./handlers/index.mjs"
//import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
    listeners.setLoginFormListenter();
} else if (path === "/profile/register/") {
    listeners.setRegisterFormListenter();
} else if (path === "/post/create/") {
    listeners.setCreatePostListener();
} else if (path === "/post/edit/") {
    listeners.setUpdatePostListenter();
} else if (path === "/") {
    listeners.setLoginFormListenter();
} else {
    console.log("I'm not going to do anything because I'm not on the login or register page");
}

//Rendering the post(s)
/* async function testTemplate() {
    const posts = await postMethods.getPosts();
    console.log(posts);
    if (posts.length > 0) {
        const post = posts[25];
        const container = document.querySelector("#post");
        templates.renderPostTemplates(posts, container);
    } else {
        console.log('No posts to display');
    }
}

testTemplate() */

/* createPost( {
    title: "examplasdf",
    body: "heuhjeg"
}) */

//post.removePost(11685)

//post.getPosts().then(console.log);
//post.getPost(1168).then(console.log);


