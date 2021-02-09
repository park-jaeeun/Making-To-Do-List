const API_KEY = "67c24faad82fd3c026ae6d35dc48c6da";

const COORDS = "coords"

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
        //latitude,
        //longitude 와 같은 표현.
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("cant access geo location.")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        //gerWeather 
    }
}

function init() {
    loadCoords();
}

init();