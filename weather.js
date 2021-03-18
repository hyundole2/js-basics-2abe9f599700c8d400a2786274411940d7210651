const COORDS = "coords";

function saveCoord(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGetoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoord(coordsObj);
}

function handleGeoError() {
  console.log("fail");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGetoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
  }
}

function init() {
  loadCoords();
}

init();
