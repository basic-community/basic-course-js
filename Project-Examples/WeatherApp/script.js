async function getWeather() {
    try {
        const response = await fetch('http://goweather.xyz/weather/jakarta');
        const data = await response.json();
        
        document.getElementById('temp').textContent = data.temperature || 'N/A';
        document.getElementById('wind').textContent = data.wind || 'N/A';
        document.getElementById('description').textContent = data.description || 'No data';
    } catch (error) {
        document.getElementById('description').textContent = 'Error loading data';
    }
}

getWeather();
