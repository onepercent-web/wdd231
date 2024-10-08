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



// Função para obter o clima atual
async function getWeather() {
    const apiKey = '00bdc7cd40778dda1c03b674877da3f4'; // Sua chave API
    const city = 'Tsukuba,jp'; // Cidade e país
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Obtém o clima atual
        const weatherResponse = await fetch(currentWeatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('Erro ao obter os dados do clima atual');
        }
        const weatherData = await weatherResponse.json();

        // Atualiza o conteúdo da página com os dados do clima atual
        document.getElementById('current-temp').textContent = `${weatherData.main.temp} °C`;
        document.getElementById('current-description').textContent = weatherData.weather[0].description;
        document.getElementById('high-temp').textContent = `High: ${weatherData.main.temp_max} °C`;
        document.getElementById('low-temp').textContent = `Low: ${weatherData.main.temp_min} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${weatherData.main.humidity}%`;
        document.getElementById('sunrise').textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById('sunset').textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

        // Obtém a previsão do tempo
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            throw new Error('Erro ao obter os dados da previsão do tempo');
        }
        const forecastData = await forecastResponse.json();

        // Atualiza a previsão do tempo
        document.getElementById('today-temp').textContent = `${forecastData.list[0].main.temp} °C`;
        document.getElementById('tomorrow-temp').textContent = `${forecastData.list[8].main.temp} °C`; // 8 * 3h = 24h
        document.getElementById('day-after-temp').textContent = `${forecastData.list[16].main.temp} °C`; // 16 * 3h = 48h
    } catch (error) {
        console.error(error);
        alert('Não foi possível obter os dados do clima. Verifique sua conexão ou a chave API.');
    }
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    getWeather();
});






// Toggle menu for mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("open"); // Toggle the 'open' class on click
    });
});

// Last Modified
window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
};