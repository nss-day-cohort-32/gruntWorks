/*
creates results header
*/
let parksItineraryArea = document.querySelector("#parks");
let restaurantsItineraryArea = document.querySelector("#restaurants");
let meetupsItineraryArea = document.querySelector("#meetups");
let concertsItineraryArea = document.querySelector("#concerts");

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
  const p = document.createElement("p");
  p.textContent = `${name}: ${address}`;

  renderSearchResultsHere.appendChild(makeDiv);
  makeDiv.appendChild(btnResults);
  makeDiv.appendChild(p);

  btnResults.addEventListener("click", e => {
    let selectedItem = e.target.nextSibling.textContent;
    renderItinerary(selectedItem, categoryIs);
  });
}
