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





// API key and URL for OpenWeatherMap
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'Tsukuba';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Update weather section
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = capitalizeWords(data.weather[0].description);
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('sunrise').textContent = `Sunrise: ${convertUnixTime(data.sys.sunrise)}`;
        document.getElementById('sunset').textContent = `Sunset: ${convertUnixTime(data.sys.sunset)}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Helper function to convert UNIX timestamp to readable time
function convertUnixTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Helper function to capitalize weather description
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Call the weather data
getWeather();

