let appId = '67c6d1b92a4e857cb78c9e909ed38111';
let units ="metric";
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
    searchMethod = 'zip';
    else
    searchMethod='q';
}
function searchWeather(searchTerm){
  getSearchMethod(searchTerm);
  fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
  .then(result =>{
      return result.json();
  }).then(result =>{
      init(result);
  })
}
function init(resultFromServer){
  let cityElement = document.getElementById('cityHeader');
  let temperatureElement = document.getElementById('temperature');
  let windSpeedElement = document.getElementById('windSpeed');
  let humidityElement = document.getElementById('humidity');
  let weatherDescriptionElement = document.getElementById('weatherDescriptionHeader');
  let resultDescription = resultFromServer.weather[0].description;
  weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
  humidityElement.innerHTML = 'Humidity level '+resultFromServer.main.humidity + '%';
  windSpeedElement.innerHTML = 'Winds at '+ resultFromServer.wind.speed + 'm/s';
  temperatureElement.innerHTML =  Math.floor(resultFromServer.main.temp) + '&#176';
  cityElement.innerHTML = resultFromServer.name;
setPositionForWeatherInfo();
}
function setPositionForWeatherInfo(){
  let weatherConatiner = document.getElementById('weatherContainer');
  let weatherContainerHeight = weatherContainer.clientHeight;
  let weatherConatinerWidth =weatherContainer.clientWidth;
  weatherConatiner.style.left = 'calc(50% - ${weatherContainerWidth/2})';
  weatherConatiner.style.top = 'calc(50% - ${weatherContainerHeight/1.3})';
  weatherConatiner.style.visibility = 'visible'; 
  }
document.getElementById('searchbtn').addEventListener('click', ()=>{
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
  searchWeather(searchTerm);
})
