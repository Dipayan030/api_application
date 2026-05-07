const apiKey = '6d1ebeb8e5508503150e885e24b9aa5e';
async function fetchWeather() {
    const cityName = document.getElementById('city').value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    // const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=f8b3e9e8443740049c9212627261101&q=London&days=1&aqi=no&alerts=no`;
    try {
        const response = await fetch(API_URL);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weatherData = await response.json();
        console.log(weatherData);
        displayWeather(weatherData);
    }
    catch (error) {
        console.error('could not fetch data:',error);
    }
}
// fetchWeather();
function displayWeather(weatherData) {
    document.getElementById('temperature').textContent = `${Math.round(weatherData.main.temp)}°C`;
    document.getElementById('place').textContent = weatherData.name;
    document.getElementById('status').textContent = weatherData.weather[0].main;
    document.getElementById('feels-like').textContent = `${Math.round(weatherData.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${Math.round(weatherData.main.humidity)}%`;
    document.getElementById('pressure').textContent = `${Math.round(weatherData.main.pressure)}hPa`;
};



