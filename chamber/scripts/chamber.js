// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};


// Fetch members from JSON file
async function getMembers() {
    const response = await fetch('members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const gridContainer = document.querySelector('.grid-view');
    const listContainer = document.querySelector('.list-view tbody');

    members.forEach(member => {
        // Create card for grid view
        const gridItem = document.createElement('div');
        gridItem.classList.add('business');
        gridItem.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">${member.website}</a>
        `;
        gridContainer.appendChild(gridItem);

        // Create row for list view
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${member.name}</td>
            <td>${member.address}</td>
            <td>${member.phone}</td>
            <td><a href="${member.website}">${member.website}</a></td>
        `;
        listContainer.appendChild(listItem);
    });
}

// Event listeners for view toggle
document.getElementById('grid-view').addEventListener('click', () => {
    document.querySelector('.grid-view').style.display = 'block';
    document.querySelector('.list-view').style.display = 'none';
});

document.getElementById('list-view').addEventListener('click', () => {
    document.querySelector('.grid-view').style.display = 'none';
    document.querySelector('.list-view').style.display = 'block';
});


getMembers();