function doTheSearch(event){
    event.preventDefault();

    let searchInput=document.querySelector("#city-input");
    let cityElement=document.querySelector("h1");
    cityElement.innerHTML=searchInput.value;
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
