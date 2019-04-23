/* 

Colin's functions for the Restaurant Category 

*/
console.log("mic check 1-2 1-2");

const restaurantsSearchBtn = document.querySelector("#restaurants-button");
let restaurantInput = document.querySelector("#restaurants-search-input");

restaurantsSearchBtn.addEventListener("click", e => {
  var takeRestValue = restaurantInput.value;
  fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${takeRestValue}`,
    {
      headers: {
        Accept: "application/json",
        "user-key": `${colinKey}`
      }
    }
  )
    .then(entries => entries.json())
    .then(results => {
      // create search results header
      const renderSearchResultsHere = document.querySelector(
        "#search-results-container"
      );
      const resultsHeader = document.createElement("h3");
      resultsHeader.textContent = "Search Results";
      renderSearchResultsHere.appendChild(resultsHeader);
      // loop through results and print to DOM
      for (var i = 0; i < 5; i++) {
        console.log(results.restaurants[i].restaurant.name);
        console.log(results.restaurants[i].restaurant.location.address);
        let restName = results.restaurants[i].restaurant.name;
        let restLoc = results.restaurants[i].restaurant.location.address;
        renderSearchResults(restName, restLoc);
      }
    });
});
