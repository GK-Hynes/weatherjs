// Initialize storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city);

// Initialize UI
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;

  // Change location
  weather.changeLocation(city);

  // Set location in localStorage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close modal (unfortunately Bootstrap uses jQuery)
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
