// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};


async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const directorySection = document.querySelector('.directory');
    directorySection.innerHTML = '';  // Clear existing content

    members.forEach(member => {
        const businessCard = document.createElement('article');
        businessCard.classList.add('business');
        
        businessCard.innerHTML = `
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}">${member.website}</a>
        `;

        directorySection.appendChild(businessCard);
    });
}

loadMembers();


document.getElementById('grid-view').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('grid-view');
    document.querySelector('.directory').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('list-view');
    document.querySelector('.directory').classList.remove('grid-view');
});

