import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const adventure = new URLSearchParams(search).get("adventure");

  // Place holder for functionality to work in the Stubs
  return adventure;
}

//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    const adventureDetails = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)
    console.log(adventureDetails)
    const obj = await adventureDetails.json()
    return obj;
  }catch(ele){
    ele = null;
    return ele;
  };
  // Place holder for functionality to work in the Stubs 
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  document.getElementById("adventure-name").textContent = adventure.name;
  document.getElementById("adventure-subtitle").textContent = adventure.subtitle;
  let divEle = document.getElementById("adventure-content");
  divEle.innerHTML = `<p>${adventure.content}</p>`;
  const imageArr = adventure.images;
  images.forEach(function(img){
    const imageDiv = `<div>
                      <image src="${img}" alt="image" class="activity-card-image" />
                     </div>`;
    document.getElementById("photo-gallery") += imageDiv;
  })
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let newDiv = document.getElementById("photo-gallery").innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators"></div>
      <div class="carousel-inner"></div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;

  images.forEach(function(image, index){
    const imageDiv = `<div class="carousel-item overflow-hidden ${index === 0? "active" : ""}">
                      <image src="${image}" alt="image" class="activity-card-image" />
                     </div>`;
    // console.log(imageDiv);
    const indicatorButton = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${index === 0? `class="active" aria-current="true"`: ""} aria-label="${index + 1}" ></button>`;
    document.querySelector("div > div.carousel-indicators").innerHTML += indicatorButton;
    document.querySelector("div > div.carousel-inner").innerHTML += imageDiv;
  })

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
