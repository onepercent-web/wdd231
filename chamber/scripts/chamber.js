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

    // View Toggle Buttons - Add event listeners for Grid and List View buttons
    document.getElementById('grid').addEventListener('click', function () {
        document.querySelector('.grid-view').style.display = 'flex';
        document.querySelector('.list-view').style.display = 'none';
    });

    document.getElementById('list').addEventListener('click', function () {
        document.querySelector('.grid-view').style.display = 'none';
        document.querySelector('.list-view').style.display = 'block';
    });
});

// Fetch members from JSON file and display in both Grid and List views
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        let gridContainer = document.querySelector('.grid-view'); // Grid container
        let listContainer = document.querySelector('.list-view tbody'); // List container

        data.forEach(member => {
            // Add member to Grid View
            let gridItem = `
                <div class="member-card">
                    <img src="${member.image}" alt="${member.name} logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                </div>`;
            gridContainer.innerHTML += gridItem;

            // Add member to List View
            let listItem = `
                <tr>
                    <td>${member.name}</td>
                    <td>${member.address}</td>
                    <td>${member.phone}</td>
                    <td><a href="${member.website}" target="_blank">${member.website}</a></td>
                </tr>`;
            listContainer.innerHTML += listItem;
        });
    })
    .catch(error => console.error('Error fetching the data:', error));