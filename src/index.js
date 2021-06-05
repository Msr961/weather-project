let now = new Date();
let footer = document.querySelector("footer");
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Juny",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
footer.innerHTML = `${day}, ${month} ${date},${hours}:${minutes},${year}`;

function displayWeatherCondition(response) {}
function search(event) {
  event.preventDefault();
  let apiKey = "149a99b85334053dca2cfb6962165eb1";

  let citySearch = document.querySelector("#query");
  let city = citySearch.value;
  let apiUrl = `htpps:// api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 35;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFarenheit);
function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 10;
}
let celcius = document.querySelector("#celsius-link");
celcius.addEventListener("click", convertToCelcius);
