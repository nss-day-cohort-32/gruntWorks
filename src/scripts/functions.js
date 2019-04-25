/*
creates results header
*/
let parksItineraryArea = document.querySelector("#parks");
let restaurantsItineraryArea = document.querySelector("#restaurants");
let meetupsItineraryArea = document.querySelector("#meetups");
let concertsItineraryArea = document.querySelector("#concerts");
const saveItineraryBtn = document.querySelector("#save-itinerary-btn");

function createResultsHeader() {
  // create search results header
  const renderSearchResultsHere = document.querySelector(
    "#search-results-container"
  );
  const resultsHeader = document.createElement("h3");
  resultsHeader.textContent = "Search Results";
  renderSearchResultsHere.appendChild(resultsHeader);
}

/*
Function to render the Intinerary Items to the DOM params to pass in: category, & description
*/
function renderItinerary(item, category) {
  const p = document.createElement("p");
  var categoryIs = category;
  p.textContent = `${item}`;
  if (categoryIs === "parks") {
    if (parksItineraryArea.lastElementChild.tagName === "P") {
      parksItineraryArea.removeChild(parksItineraryArea.lastElementChild);
    }
    parksItineraryArea.appendChild(p);
  }
  if (categoryIs === "restaurants") {
    if (restaurantsItineraryArea.lastElementChild.tagName === "P") {
      restaurantsItineraryArea.removeChild(
        restaurantsItineraryArea.lastElementChild
      );
    }
    restaurantsItineraryArea.appendChild(p);
  }
  if (categoryIs === "meetups") {
    if (meetupsItineraryArea.lastElementChild.tagName === "P") {
      meetupsItineraryArea.removeChild(meetupsItineraryArea.lastElementChild);
    }
    meetupsItineraryArea.appendChild(p);
  }
  if (categoryIs === "concerts") {
    if (concertsItineraryArea.lastElementChild.tagName === "P") {
      concertsItineraryArea.removeChild(concertsItineraryArea.lastElementChild);
    }
    concertsItineraryArea.appendChild(p);
  }
}

/*
Function to render the resuls to the DOM params to pass in: name & address or venue name
*/
const renderSearchResultsHere = document.querySelector(
  "#search-results-container"
);

function renderSearchResults(name, address, category) {
  const makeDiv = document.createElement("div");
  makeDiv.classList.add("results-card");
  const btnResults = document.createElement("button");
  let categoryIs = category;
  btnResults.textContent = "Save";
  const h5 = document.createElement("h5");
  h5.innerHTML = name;
  const p = document.createElement("p");
  p.textContent = address;

  renderSearchResultsHere.appendChild(makeDiv);
  makeDiv.appendChild(btnResults);
  makeDiv.appendChild(h5);
  makeDiv.appendChild(p);

  btnResults.addEventListener("click", e => {
    let selectedItem = e.target.nextSibling.textContent;
    selectedItem += ": " + e.target.nextSibling.nextElementSibling.textContent;
    renderItinerary(selectedItem, categoryIs);
  });
}

// saveItineraryBtn.addEventListener("click", e => {
//   const parkValue = document.querySelector("#parks").firstElementChild
//     .nextSibling.textContent;
//   const restaurantValue = document.querySelector("#restaurants")
//     .firstElementChild.nextSibling.textContent;
//   const meetupValue = document.querySelector("#meetups").firstElementChild
//     .nextSibling.textContent;
//   const concertValue = document.querySelector("#concerts").firstElementChild
//     .nextSibling.textContent;

//   let itineraryObj = {
//     park: parkValue,
//     restaurant: restaurantValue,
//     meetup: meetupValue,
//     concert: concertValue
//   };
//   console.log(parkValue);
// });
// function addItineraryToJson() {}
