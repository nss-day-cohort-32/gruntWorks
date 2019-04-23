/* 
Function to render the Intinerary Items to the DOM params to pass in: category, & description
*/
function renderItinerary(category, desc) {
  const renderItineraryHere = document.querySelector("#itinerary-locaysh");

  const p = document.createElement("p");
  p.textContent = `${category}: ${desc}`;
  renderItineraryHere.appendChild(p);
}

/* 
Function to render the resuls to the DOM params to pass in: name & address or venue name
*/

let iterator = 0;
function renderSearchResults(name, address) {
  iterator++;
  const renderSearchResultsHere = document.querySelector(
    "#search-results-container"
  );
  const btnResults = document.createElement("button");
  btnResults.textContent = "Save";
  btnResults.id = `save-btn-${iterator}`;
  const p = document.createElement("p");
  p.textContent = `${name}: ${address}`;
  renderSearchResultsHere.appendChild(btnResults);
  renderSearchResultsHere.appendChild(p);

  btnResults.addEventListener("click", e => {
    let selectedItem = e.target.parentNode;
    render;
  });
}
