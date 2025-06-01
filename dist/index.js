"use strict";
// DOM elements
const messageInput = document.getElementById("messageInput");
const submitButton = document.getElementById("submitButton");
const output = document.getElementById("output");
// Event listener
submitButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        displayMessage(message);
        messageInput.value = "";
    }
});
// Display message function
function displayMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    output.appendChild(messageElement);
}
//# sourceMappingURL=index.js.map