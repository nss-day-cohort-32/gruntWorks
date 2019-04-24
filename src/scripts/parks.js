console.log("ParkList");

const parksSearchBtn = document.querySelector("#parks-button");
let parksInput = document.querySelector("#parks-search-input");


parksSearchBtn.addEventListener("click", e => {
    var takeParksValue = parksInput.value;
    parksInput.value = "";
    renderSearchResultsHere.innerHTML = "";
    console.log(takeParksValue)
  createResultsHeader();
  fetch(
    `https://data.nashville.gov/resource/xbru-cfzi.json?$q=${takeParksValue}`,
    {
        headers: {
          Accept: "application/json",
          "X-App-Token": `${burakKey}`
        }
    }
    ).then(entries => entries.json())
     .then(results => {
        for (var i = 0; i < 5; i++) {
            if (results[i] === undefined){
                continue;
            }
            let parkName = results[i].park_name;
            let parkLoc = results[i].mapped_location_address;
            console.log(parkName);
            console.log(parkLoc);
            renderSearchResults(parkName, parkLoc);
          }
        });
    });
    