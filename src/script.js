function doTheSearch(event) {
  event.preventDefault();

  let cityInputElement = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInputElement.value;
  }


let searchFormElement = document.querySelector("#city-search-button");
searchFormElement.addEventListener("submit", doTheSearch);
