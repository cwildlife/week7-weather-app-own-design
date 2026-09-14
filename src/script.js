function updateWeather(response){
  let temperatureElement=document.querySelector("#temperature-value");
let temperature = response.data.temperature.current;
  temperatureElement.innerHTML=response.data.temperature.current;
console.log(response.data.temperature.current);
}


function searchCity(city){
let apiKey="b94o8b93a9f0455cftd053151d5ee87d";
let apiUrl='https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
axios.get(apiUrl).then(updateWeather);
}



function doTheSearch(event){
    event.preventDefault();

    let searchInput=document.querySelector("#city-input");
    let cityElement=document.querySelector("h1");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
