function updateWeather(response){
  let temperatureElement=document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  
  let cityElement=document.querySelector("#city-name");
  cityElement.innerHTML=response.data.city;
  
  temperatureElement.innerHTML=Math.round (temperature);
}

function searchCity(city){
let apiKey="b94o8b93a9f0455cftd053151d5ee87d";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(updateWeather);
}

function doTheSearch(event){
    event.preventDefault();

    let searchInput=document.querySelector("#city-input");
     
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
