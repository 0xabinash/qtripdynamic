
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  const parameter = new URLSearchParams(search).get("city");
  return parameter;
  // 1. Extract the city id from the URL's Query Param and return it

}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  try{
    const cityAdventures = await fetch(`${config.backendEndpoint}/adventures?city=${city}`);
    const cityAdventuresData = await cityAdventures.json();
    return cityAdventuresData;
    // return cityAdventuresData;
  }catch(err){
    return null;
  }
  // 1. Fetch adventures using the Backend API and return the data

}
function createAdventureCard(obj){
  let colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-6 col-lg-3 mb-4");
  colDiv.innerHTML = `<a href="/detail/?adventure=${obj.id}" id="${obj.id}">
                        <div class="activity-card rounded">
                          <div class="m-0 p-0 h-100 w-100 overflow-hidden rounded-top">
                            <img src="${obj.image}" />
                          </div>
                          <div class="category-banner">${obj.category}</div>
                          <div class="adventure-detail-card w-100" >
                            <div class="d-flex justify-content-between align-items-center ">
                              <h6>${obj.name}</h6>
                              <p>₹${obj.costPerHead}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                              <h6>Duration</h6>
                              <p>${obj.duration} hours</p>
                            </div>
                          </div>
                        </div>
                     </a>`;
  return colDiv;
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  const rowDiv = document.getElementById("data");
  adventures.forEach(function(ele){
    rowDiv.append(createAdventureCard(ele));
  })
  // 1. Populate the Adventure Cards and insert those details into the DOM

}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  let filteredListByTime = new Array();

  for(let i = 0; i < list.length; i++){
    if(list[i].duration > low && list[i].duration <= high){
      filteredListByTime.push(list[i]);
    }
  }
  // console.log(filteredListByTime);
  return filteredListByTime;
  // 1. Filter adventures based on Duration and return filtered list
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  let filteredList = new Array();

  for(let i = 0; i < categoryList.category.length; i++){
    // console.log(categoryList.category[i])
    let category = categoryList.category[i];
    for(let j = 0; j < list.length; j++){
      if(list[j].category === category){
        filteredList.push(list[j]);
      }
    }
  }

  return filteredList;
  // 1. Filter adventures based on their Category and return filtered list
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  let categoryList = new Array();
  categoryList = list;

  if(filters.duration.length > 0){
    const filterDuration = filters.duration.split("-");
    // console.log(filterDuration)
    categoryList = filterByDuration(list, filterDuration[0]-"0", filterDuration[1]- "0");
  }

  if(filters.category.length > 0){
    categoryList = filterByCategory(categoryList, filters);
  }
  // Place holder for functionality to work in the Stubs
  return categoryList;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  localStorage.setItem("filters", JSON.stringify(filters));
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  let savedFilters = localStorage.getItem("filters");

  savedFilters = JSON.parse(savedFilters);


  // Place holder for functionality to work in the Stubs
  return savedFilters;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // const appliedCategories = document.getElementById("catrgory-list");
  // appliedCategories.textContent = filters.category[0];
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
