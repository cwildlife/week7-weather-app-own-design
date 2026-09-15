function updateWeather(response){
  let temperatureElement=document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let conditionsElement=document.querySelector("#conditions-description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let emojiElement=document.querySelector("#emoji");

  let dateTimeElement=document.querySelector("#date-time");
  let date=new Date(response.data.time *1000);

  let cityElement=document.querySelector("#city-name");

  cityElement.innerHTML=response.data.city;
  conditionsElement.innerHTML=response.data.condition.description;
  humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML= `${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML=Math.round (temperature);
  dateTimeElement.innerHTML=formatDate(date);
  emojiElement.innerHTML=`<img src= "${response.data.condition.icon_url}" class="emoji"/>`;
}


function formatDate(date){
  let minutes = date.getMinutes();
  let hours= date.getHours();
  let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  if (minutes < 10);{
    minutes=`0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
  }

function searchCity(city){
let apiKey="b94o8b93a9f0455cftd053151d5ee87d";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}

function doTheSearch(event){
    event.preventDefault();

    let searchInput=document.querySelector("#city-input");
     
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
