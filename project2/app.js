const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const endPoint =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const inputElement = document.querySelector('.search input');
const buttonElement = document.querySelector('.search button');
console.log(inputElement);
console.log(buttonElement);
async function getWeatherData(cityName) {
  const data = await fetch(endPoint + cityName + `&appid=${apiKey}`);
  const response = await data.json();
  console.log(response);
  document.querySelector('.temp').innerHTML = response.main.temp + '°c';
  document.querySelector('.city').innerHTML = response.name;
  document.querySelector('.wind').innerHTML = response.wind.speed + 'km/h';
  document.querySelector('.humidity').innerHTML = response.main.humidity + '%';

  const weatherType = response.weather[0].main;
  const weatherIcon = document.querySelector('.weather-icon');
  if (weatherType === 'Mist') {
    weatherIcon.src = 'images/mist.png';
  } else if (weatherType === 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (weatherType === 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (weatherType === 'Humidity') {
    weatherIcon.src = 'images/humidity.png';
  } else if (weatherType === 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (weatherType === 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (weatherType === 'Snow') {
    weatherIcon.src = 'images/snow.png';
  }
  const weatherDiv = document.querySelector('.weather');
  weatherDiv.style.display = 'block';
}
buttonElement.addEventListener('click', () => {
  getWeatherData(inputElement.value);
});
