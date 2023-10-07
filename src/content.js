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

// Function to hide a specific element by its class
function hideElementByClass() {
    const elementToHide = document.querySelector('.absolute.bottom-full.left-0.mb-4.flex.w-full.grow.gap-2.px-1.pb-1.sm\\:px-2.sm\\:pb-0.md\\:static.md\\:mb-0.md\\:max-w-none');
    if (elementToHide) {
        elementToHide.style.display = 'none';  // Hide the element
        console.log("Hidden the specific element with the given class.");
    } else {
        console.log("Element with the given class not found.");
    }
}

// Function to continuously check for the "continue" button and hide the specific element
function checkForActions() {
    clickContinueButton();
    hideElementByClass();
    setTimeout(checkForActions, 1000); // Check every 1 second
}

// Start the process when the page finishes loading
window.addEventListener("load", function() {
    console.log("Page has loaded. Starting the actions.");
    checkForActions();
});
