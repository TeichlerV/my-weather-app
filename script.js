// Feature 1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = [now.getHours()];
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = [now.getMinutes()];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h3 = document.querySelector("h3");

h3.innerHTML = `${day} ${hours}:${minutes}`;
// Feature 2
function showTemperature(response) {
  document.querySelector("#changeCity").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  cityChange(city);
}
function cityChange(city) {
  let apiKey = `f11513b2078ba14d724b13ea7a861bef`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
  console.log(apiUrl);
}

// Feature 3
function fahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  temperatureElement.innerHTML = "50 °F";
}

function celsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  temperatureElement.innerHTML = "10 °C";
}

let fahLink = document.querySelector("#fah-link");
fahLink.addEventListener("click", fahrenheitTemp);

let celLink = document.querySelector("#cel-link");
celLink.addEventListener("click", celsiusTemp);

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", handleSubmit);
