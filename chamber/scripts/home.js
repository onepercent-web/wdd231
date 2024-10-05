// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};

// Fetch members from the JSON file
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
      let businessCardContainer = document.querySelector('.business-card-container');

      // Shuffle the array to randomize member order
      let shuffledMembers = data.sort(() => 0.5 - Math.random());

      // Select the first two members from the shuffled array
      let selectedMembers = shuffledMembers.slice(0, 2);

      // Loop through the selected members and display them
      selectedMembers.forEach(member => {
          // Create a business card for each selected member
          let businessCard = `
              <div class="business-card">
                  <img src="${member.image}" alt="${member.name} logo">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <a href="${member.website}" target="_blank">${member.website}</a>
                  <p>${member.description}</p>
              </div>`;
          
          // Append the business card to the container
          businessCardContainer.innerHTML += businessCard;
      });
  })
  .catch(error => console.error('Error fetching the data:', error));
