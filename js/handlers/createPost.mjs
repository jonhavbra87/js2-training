import { createPost } from "../api/posts/create.mjs"

export function setCreatePostListener() {
    const form = document.querySelector("#createPost");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const post = Object.fromEntries(formData.entries());
            console.log("I'm going to create a post with the following data:", post);

            if (post.tags) {
               const tagsArray = post.tags = post.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag !== "");
        
                post.tags = tagsArray.length > 0 ? tagsArray : [];
              } else {
                post.tags = [];
              }

            try {
                const response = await createPost(post);  // Legg til await her
                console.log("Post created successfully", response);
            } catch (error) {
                console.error("Failed to create the post:", error);
            }
        });
    }
}


/* 
From GTP: often used when it is a async function
              createPost(post)
              .then((response) => {
                console.log("Post created successfully, ", response);
              })
              .catch((error) => { 
               console.error("post created failed: ", error);
              }); */


/*        
Chat GPT:

export function setCreatePostListener() {
    const form = document.querySelector("#createPost");

    if (form) {
        console.log("Form found, attaching event listener.");
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            console.log("Form submission intercepted."); // Check if this logs

            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            console.log("Form data:", post); // Ensure this logs and data is correct

            try {
                const response = await createPost(post);
                console.log("Post created successfully", response);
            } catch (error) {
                console.error("Failed to create the post:", error);
            }
        });
    } else {
        console.error("Form not found");
    }
}

        }) */