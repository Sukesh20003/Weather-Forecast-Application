
const apiKey = "1ca32c243a0a499f947f614fa7b1537f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=gujarat";

async function checkWeather() {
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();
    console.log(data);
}

checkWeather();

