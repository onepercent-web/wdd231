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

document.addEventListener("DOMContentLoaded", function () {
    // 1. Set the current timestamp when the page loads
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 2. Control modal open and close actions
    const modals = {
        modal1: document.getElementById("modal1"),
        modal2: document.getElementById("modal2"),
        modal3: document.getElementById("modal3"),
        modal4: document.getElementById("modal4")
    };

    // Add event listener to each "Learn More" link to open the right modal
    document.querySelectorAll(".info-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetModalId = e.target.getAttribute("data-modal");
            if (modals[targetModalId]) {
                modals[targetModalId].showModal();
            }
        });
    });

    // Add event listener to close buttons in each modal
    document.querySelectorAll(".modal button").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });

    // 3. Add fade-in animation to cards on page load
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.animation = `cardAnimation${index + 1} 2s ease-in-out forwards`;
    });
});
