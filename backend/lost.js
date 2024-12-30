const { JSDOM } = require("jsdom");
const http = require("http");

// Create a simulated DOM
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="posts"><input id="itemName"><input id="itemDescription"></div></body></html>`);
const document = dom.window.document;

const posts = document.getElementById("posts");

// Function to create and return a new DOM element with given attributes(class, id) and content
function createElement(tag, attributes = {}, string_msg = "") {
    const element = document.createElement(tag);

//dummy attributes can be class and id
// Set the default class and id
// if (className) element.className = className;
// if (id) element.id = id;

    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    if(string_msg){
        element.innerHTML = string_msg;
    }
     return element;
}

// Function to add a new post
function addPost() {
    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;

    if (!itemName || !itemDescription) {
        console.error("Please fill out both fields")
        return;
    }

    const postId = Date.now(); // Unique ID for the post based on time in milliseconds

    const postElement = createElement("div", { class: "post-container", id: `post-${postId}` });

    postElement.innerHTML = `
        <div>
            <h4>${itemName}</h4>
            <p>${itemDescription}</p>
        </div>
    `;

    // "Mark Found" button
    const markFoundButton = createElement("button", {}, "Mark Found");

    // Add event listener to remove post when button is clicked
    markFoundButton.addEventListener("click", () => {
        const postElement = document.getElementById(`post-${postId}`);
        if (postElement) {
            posts.removeChild(postElement);
            console.log(`Post removed: ${postId}`);
        } else {
            console.error("Post not found!");
        }
    });

    postElement.appendChild(markFoundButton);
    posts.appendChild(postElement);

   //comment section
   const commentSection = createElement("div", { class: "comment-section" });

    const commentInput = createElement("input", {
        type: "text",
        placeholder: "Add a comment",
        class: "comment-input",
        id: `comment-input-${postId}`
    });
    if (!commentInput.value) {
        alert("Comment cannot be empty!");
        return;

    const commentButton = createElement("button", {
        onclick: `addComment(${postId})`
    }, "Add Comment");
    
}
    console.log(`Post added: ${itemName}`);
}

// Dummy data for server response
// const data = [
//     { itemName: "Lost Wallet", itemDescription: "Black leather wallet lost in the NAB." },
//     { itemName: "Lost Keys", itemDescription: "A set of house keys with a red keychain lost in cyber security." },
// ];

// // HTTP server linking
// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data)); 
//     res.end();
// }).listen(6500);


