const weather = document.querySelector(".js-weather");

const API_KEY = "341bccdb1aa9d2c8eb70aac75a9cabbd";
const COORDS = "coords";

function getWeather(lat, lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`).then(function(response){
   return response.json();
}).then(function(json){
    const temperature = Math.floor(json.main.temp - 273);
    const place = json.name;
    console.log(temperature);
    weather.innerText = `${temperature}°C @ ${place}`;
});
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords= JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }

}

function init() {
    loadCoords();
}

init();