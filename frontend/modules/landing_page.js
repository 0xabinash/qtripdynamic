import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(config.backendEndpoint)
  console.log(cities)

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    const cities = await fetch(config.backendEndpoint + "/cities")
    const citiesJson = await cities.json();
    return citiesJson;
  }catch(err){
    err = null
    return err;
  }
}

function getImage(image, id){
  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", " tile")
  imgDiv.style.height = "100%"
  let adventureLink = document.createElement("a");
  adventureLink.style.height = "100%"
  adventureLink.setAttribute("href", "pages/adventures/?city=${id}");
  adventureLink.setAttribute("id", id);
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", image);
  imgTag.setAttribute("width", "100%");
  imgTag.setAttribute("height", "100%");
  imgTag.setAttribute("class", "rounded");
  adventureLink.append(imgTag);
  imgDiv.append(adventureLink);
  return imgDiv
}

function getTextDiv(city, description){
  let textDiv = document.createElement("div")
  textDiv.setAttribute("class", " tile-text text-center");
  textDiv.innerHTML = `<h5>${city}</h5>
                       <p>${description}</p>`;
  
  return textDiv;
}


//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-6 col-lg-3 mb-4");
  // const rowDiv = document.getElementById("data");
  // const img = getImage(image, id);
  // const textDiv = getTextDiv(city, description);
  // img.append(textDiv);
  // colDiv.append(img)
  // rowDiv.append(colDiv);
  
  colDiv.innerHTML = `
                      <a href="pages/adventures/?city=${id}" id="${id}" >
                        <div class="tile" >
                          <div class="tile-text text-center" >
                            <h5>${city}</h5>
                            <p>${description}</p>
                          </div>
                          <img src="${image}" class="img-responsive" />
                        </div>
                      </a>
                      `;

  document.getElementById("data").appendChild(colDiv);
  
}

export { init, fetchCities, addCityToDOM };
