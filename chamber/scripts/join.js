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

// Additional code
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

    // Mapping membership data to each modal
    const membershipData = {
        modal1: {
            title: 'Non-Profit Membership',
            fee: 'Free',
            benefits: `<ul><li>Access to community events</li><li>Networking opportunities</li><li>Resource sharing</li></ul>`
        },
        modal2: {
            title: 'Bronze Membership',
            fee: '$100/year',
            benefits: `<ul><li>Basic member support</li><li>Community forum access</li><li>Quarterly newsletter</li></ul>`
        },
        modal3: {
            title: 'Silver Membership',
            fee: '$200/year',
            benefits: `<ul><li>Priority support</li><li>Increased visibility in directory</li><li>Monthly workshops</li></ul>`
        },
        modal4: {
            title: 'Gold Membership',
            fee: '$500/year',
            benefits: `<ul><li>Premium support</li><li>Top directory placement</li><li>Exclusive networking events</li></ul>`
        }
    };

    // Function to close all modals
    function closeAllModals() {
        Object.values(modals).forEach(modal => {
            if (modal.hasAttribute("open")) {
                modal.close();
            }
        });
    }

    // Add event listener to each "Show More" link to open the right modal
    document.querySelectorAll(".info-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetModalId = e.target.getAttribute("data-modal");
            const modalContent = modals[targetModalId].querySelector('.modal-content');

            // Populate modal with relevant membership data
            modalContent.innerHTML = `
                <button class="close" data-close="${targetModalId}">&times;</button>
                <h2>${membershipData[targetModalId].title}</h2>
                <p><strong>Fee:</strong> ${membershipData[targetModalId].fee}</p>
                <h3>Benefits:</h3>
                ${membershipData[targetModalId].benefits}
            `;

            // Close other modals if open, then open the selected modal
            closeAllModals();
            modals[targetModalId].showModal();
        });
    });

    // Add event listener to close buttons in each modal
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("close")) {
            const targetModalId = event.target.getAttribute("data-close");
            modals[targetModalId].close();
        }
    });

    // 3. Add fade-in animation to cards on page load
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.animation = `cardAnimation${index + 1} 2s ease-in-out forwards`;
    });
});
