// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};



// Fetch members from JSON file
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
      let gridContainer = document.querySelector('.grid-view');
      let listContainer = document.querySelector('.list-view tbody');

      data.forEach(member => {
          // Grid View
          let gridItem = `
              <div class="business">
                  <img src="images/${member.image}" alt="${member.name} logo">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <a href="${member.website}" target="_blank">${member.website}</a>
              </div>`;
          gridContainer.innerHTML += gridItem;

          // List View
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



  document.getElementById('grid-view').addEventListener('click', function () {
    document.querySelector('.grid-view').style.display = 'block';
    document.querySelector('.list-view').style.display = 'none';
});

document.getElementById('list-view').addEventListener('click', function () {
    document.querySelector('.grid-view').style.display = 'none';
    document.querySelector('.list-view').style.display = 'block';
});


