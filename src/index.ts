// DOM elements
const messageInput = document.getElementById(
  "messageInput"
) as HTMLInputElement;
const submitButton = document.getElementById(
  "submitButton"
) as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

// Event listener
submitButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message.trim() !== "") {
    displayMessage(message);
    messageInput.value = "";
  }
});

// Display message function
function displayMessage(message: string): void {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  output.appendChild(messageElement);
}
