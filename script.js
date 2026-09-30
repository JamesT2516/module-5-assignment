// Select the contact popup and its controls
const contactPopup = document.getElementById("contact-popup");
const closePopupButton = document.getElementById("close-popup");
const contactButton = document.getElementById("popup-contact-button");
const contactSection = document.getElementById("contact");


// Show the contact popup
function showContactPopup() {
    contactPopup.classList.add("show");
}


// Hide the contact popup
function hideContactPopup() {
    contactPopup.classList.remove("show");
}


// Move to the contact section
function goToContactSection() {
    hideContactPopup();
    contactSection.scrollIntoView();
}


// Show the popup when the page has loaded
window.addEventListener("load", showContactPopup);


// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", hideContactPopup);


// Move to the contact section when Contact Me is clicked
contactButton.addEventListener("click", goToContactSection);