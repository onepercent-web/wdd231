// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};



// API key and URL for OpenWeatherMap
const apiKey = 'YOUR_API_KEY'; 
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

// Fetching the member data from the JSON file
async function getMemberSpotlight() {
    try {
        const response = await fetch('members.json');
        const members = await response.json();

       // Filter members with Silver or Gold membership
        const spotlightMembers = members.filter(member => member.membershipLevel >= 2);

        // Randomly select two or three members to display
        const selectedMembers = getRandomMembers(spotlightMembers, 2);
        const spotlightContainer = document.querySelector('.spotlight-section');
        selectedMembers.forEach(member => {
            spotlightContainer.innerHTML += `
                <div class="business-card">
                    <img src="${member.image}" alt="${member.name}">
                    <p><strong>${member.name}</strong></p>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to choose member randomly
function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to Call the spotlight
getMemberSpotlight();
