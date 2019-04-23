/*
creates results header
*/

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
function renderItinerary(item) {
  const renderItineraryHere = document.querySelector("#itinerary-locaysh");
  const p = document.createElement("p");
  p.textContent = `${item}`;
  renderItineraryHere.appendChild(p);
}

/*
Function to render the resuls to the DOM params to pass in: name & address or venue name
*/
const renderSearchResultsHere = document.querySelector(
  "#search-results-container"
);
let iterator = 0;
function renderSearchResults(name, address) {
  iterator++;

  const makeDiv = document.createElement("div");
  const btnResults = document.createElement("button");
  btnResults.textContent = "Save";
  btnResults.id = `save-btn-${iterator}`;
  const p = document.createElement("p");
  p.textContent = `${name}: ${address}`;

  renderSearchResultsHere.appendChild(makeDiv);
  makeDiv.appendChild(btnResults);
  makeDiv.appendChild(p);

  btnResults.addEventListener("click", e => {
    let selectedItem = e.target.nextSibling.textContent;
    renderItinerary(selectedItem);
  });
}
