const posts = document.getElementById("posts");

// Function to create and return a new DOM element with given attributes and content
function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

//Function to add a new post
function addPost() {
    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;

    if (!itemName || !itemDescription) {
        alert("Please fill out both fields");
        return;
    }}

    const postId = Date.now(); // Unique ID for the post which is based on time in milliseconds 

    const postElement = createElement("div", { class: "post-container", id: `post-${postId}` }, `
        <div>
            <h4>${itemName}</h4>
            <p>${itemDescription}</p>
        </div>
        <button onclick="markAsFound(${postId})">Mark as Found</button>
    `);
