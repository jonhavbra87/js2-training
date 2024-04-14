import { updatePost } from "../api/posts/update.mjs";

export function setUpdatePostListenter() {
    const form = document.querySelector("#updatePost");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            console.log("I'm going to create a post with the following data: ", post)
            post.id = id;
            
            //Send it to the API
            updatePost(post);
        })
    }
}

//For a hidden  input, for the ID, this could be an option:
//      const url = new URL(location.href);
//      const id = url.searchParams.get("id");

//inside the if statement, before form.addEventListener:
//        form.id.value = id;