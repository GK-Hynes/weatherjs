// Initialize weather object
const weather = new Weather("Dublin");

// Initialize UI
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
