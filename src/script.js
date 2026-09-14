alert ("Hello! I am an alert box!!");




function doTheSearch(event){
  event.preventDefault();

let SearchInput = document.querySelector("#city");
console.log(SearchInput.value);
let cityElement = document.querySelector("#city-input");
cityElement.innerHTML = SearchInput.value;
}

let searchForm=document.querySelector("#city-search-button");
searchForm.addEventListener("submit", doTheSearch);