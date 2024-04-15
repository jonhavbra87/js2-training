//This is more tricky to add an eventListener. Create something an the search the document afterwards

export function postTemplateA(postData) {
    return `<div class="post" id=${postData.id}>${postData.title}</div>`
}

//In method B we can add an aventlistener.More efficiant than A. 
export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;

    if(postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img);
    }

    return post; 
}

export function renderPostTemplate(postData, parent) {
    //parent.innerHTML += postTemplatesA(postData)
    parent.append(postTemplateB(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplateB))
}


//This is the same contex for renerPostTemplates. But because postData matches the value of the loop. 
//postDataList.forEach(function (post) {
//    postTemplateB(post)
//})


//DOMPARSA = Combine the renderering of postTemplates A & B. 