console.log("Extension content script loaded.");

// Function to find and click the "continue" button
function clickContinueButton() {
    const continueButtonSelector = "div.flex.items-center.md\\:items-end > div > button.btn.btn-neutral";
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

// Function to hide elements
function hideElements() {
    const elementsToHide = document.querySelectorAll('div[data-projection-id]');
    elementsToHide.forEach((element) => {
        element.style.display = 'none';  // Hide the element
    });
    console.log("Hidden specific elements.");
}

// Function to continuously check for the "continue" button and hide elements
function checkForActions() {
    clickContinueButton();
    hideElements();
    setTimeout(checkForActions, 1000); // Check every 1 second
}

// Start the process when the page finishes loading
window.addEventListener("load", function() {
    console.log("Page has loaded. Starting the actions.");
    checkForActions();
});
