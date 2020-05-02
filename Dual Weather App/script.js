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
  switch(resultFromServer.weather[0].main){
    case 'Clear':
            document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1517758478390-c89333af4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")';
            document.body.style.backgroundRepeat= 'no-repeat';
            document.body.style.backgroundSize = "1700px 1700px";
            break;
    case 'Clouds':
        document.body.style.backgroundImage='url("https://pluspng.com/img-png/cloudy-sky-background-png-earth-sky-earth-cloud-blue-wallpaper-2560.png")';
        document.body.style.backgroundRepeat= 'no-repeat';
        document.body.style.backgroundSize = "1700px 1700px";
        break;
    case 'Rain':
        case 'Drizzle':
            case 'Mist':
                document.body.style.backgroundImage='url("https://wallpaperaccess.com/full/701609.jpg")';
                document.body.style.backgroundRepeat= 'no-repeat';
                document.body.style.backgroundSize = "1700px 1700px";
                break;
    case 'Thunderstorm':
        document.body.style.backgroundRepeat= 'no-repeat';   
        document.body.style.backgroundSize = "1700px 1700px";
    document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")';
        break;
        case 'Snow':
            document.body.style.backgroundRepeat= 'no-repeat';
            document.body.style.backgroundSize = "1700px 1700px";   
        document.body.style.backgroundImage='url("https://wallpaperaccess.com/full/1862302.jpg")';
            break;
    default:
        break;
  }
  let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
  let temperatureElement = document.getElementById('temperature');
  let humidityELement = document.getElementById('humidity');
  let windSpeedElement = document.getElementById('windSpeed');
  let cityHeaderElement =document.getElementById('cityHeader');

  let resultDescription = resultFromServer.weather[0].description;
  weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

  temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
  windSpeedElement.innerHTML = 'Winds at '+ Math.floor(resultFromServer.wind.speed) + 'm/s';
  cityHeaderElement.innerHTML = resultFromServer.name;
  humidityELement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';
  
  setPositionForWeatherInfo();
}
function setPositionForWeatherInfo(){
    let weatherConatiner = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherConatiner.clientHeight;
    let weatherConatinerWidth = weatherConatiner.clientWidth;
    weatherConatiner.style.left = 'calc(50% - ${weatherContainerWidth/2})';
    weatherConatiner.style.top = 'calc(50% - ${weatherContainerHeight/1.3})';
    weatherConatiner.style.visibility = 'visible'; 
    }
document.getElementById('searchbtn').addEventListener('click', ()=>{
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})