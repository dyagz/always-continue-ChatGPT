// content.js

// Update this selector based on the HTML you provided
const continueButtonSelector = "div.flex.items-center.md\\:items-end > div > button.btn.btn-neutral";

console.log("Extension content script loaded.");

// Function to find and click the "continue" button
function clickContinueButton() {
    console.log("Searching for the continue button...");
    const continueButton = document.querySelector(continueButtonSelector);
    if (continueButton) {
        const buttonText = continueButton.textContent || continueButton.innerText;
        if (buttonText.includes("Continue generating")) {
            console.log("Found the continue button with the correct text. Clicking it now.");
            continueButton.click();
        } else {
            console.log("Found the button, but the text is not 'Continue generating'.");
        }
    } else {
        console.log("Continue button not found.");
    }
}

// Function to continuously check for the "continue" button
function checkForContinueButton() {
    clickContinueButton();
    setTimeout(checkForContinueButton, 1000); // Check every 1 second
}

// Start the checking process when the page finishes loading
window.addEventListener("load", function() {
    console.log("Page has loaded. Starting the button clicker.");
    checkForContinueButton();
});
