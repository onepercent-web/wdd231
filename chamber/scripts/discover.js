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


