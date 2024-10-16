// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};

// Toggle menu for mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("open"); // Toggle the 'open' class on click
    });
});



// Visitor message in sidebar
const visitorMessage = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (lastVisit) {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit < 1) {
        visitorMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        visitorMessage.textContent = `You last visited ${daysSinceLastVisit} day ago.`;
    } else {
        visitorMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
} else {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit", now);