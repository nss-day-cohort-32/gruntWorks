console.log("ParkList");

const parksSearchBtn = document.querySelector("#parks-button");
let parksInput = document.querySelector("#parks-search-input");

// 1- Search and print from Fetch

parksSearchBtn.addEventListener("click", e => {
  var takeParksValue = parksInput.value;
  parksInput.value = "";
  renderSearchResultsHere.innerHTML = "";
  console.log(takeParksValue);
  createResultsHeader();
  const makeCategory = document.createElement("h4");
  makeCategory.textContent = "Parks";
  renderSearchResultsHere.appendChild(makeCategory);
  fetch(
    `https://data.nashville.gov/resource/xbru-cfzi.json?$q=${takeParksValue}`,
    {
      headers: {
        Accept: "application/json",
        "X-App-Token": `${burakKey}`
      }
    }
  )
    .then(entries => entries.json())
    .then(results => {
      //If no results
      if (results <= 0) {
        const NoResult = document.createElement("h2");
        NoResult.textContent = "No Results Found";
        renderSearchResultsHere.appendChild(NoResult);
       } 
      else {
      for (var i = 0; i < 5; i++) {
        if (results[i] === undefined) {
          continue;
        }
        let parkName = results[i].park_name;
        let parkLoc = results[i].mapped_location_address;
        console.log(parkName);
        console.log(parkLoc);
        renderSearchResults(parkName, parkLoc, "parks");
      }
    }});
});

//Enter keyboard function

parksInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   parksSearchBtn.click();
  }
});

