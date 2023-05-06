let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
if (weather[city] !== undefined) {
  let temper = weather[city].temp;
  let hmd = weather[city].humidity;
  let celsius = Math.round(temper);
  let fahrenheit = Math.round((temper * 9) / 5 + 32);
  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${city} with a humidity of ${hmd}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
function cityTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let cityTemp = document.querySelector("#current-tmp");
  cityTemp.innerHTML = `${temp}°C`;
  let cityDescription = document.querySelector("#clouds");
  cityDescription.innerHTML = response.data.weather[0].description;
}
function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let h4 = document.querySelector("#h4");
  h4.innerHTML = `${currentCity.value}`;
  let ahvazCity = document.querySelector("#ahvaz-city");
  ahvazCity.innerHTML = `${currentCity.value}`;
  let findCity = `${currentCity.value}`;
  let key = "4ec321d0e3a18eeb073109b47e07ef28";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${findCity}&appid=${key}&units=metric`;

  axios.get(apiUrl).then(cityTemperature);
}
let form = document.querySelector("#form-city");
form.addEventListener("submit", searchCity);
