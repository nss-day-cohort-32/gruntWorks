const searchButton = document.querySelector("#meetups-button");
const searchItem = document.querySelector("#meetups-search-input");

searchButton.addEventListener("click", () => {
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${
      searchItem.value
    }&location.address=nashville&start_date.keyword=today&expand=venue`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${eliotKey}`
      }
    }
  )
    .then(data => data.json())
    .then(results => {
      if (results.top_match_events === undefined) {
        alert("Sorry! No results, try again!");
        searchItem.value = "";
        searchItem.focus();
      } else {
        searchItem.value = "";
        renderSearchResultsHere.innerHTML = "";
        // EVERYONE NEEDS THIS IN THEIR FUNCTION
        createResultsHeader();
        const makeCategory = document.createElement("h4");
        makeCategory.textContent = "Meetups";
        renderSearchResultsHere.appendChild(makeCategory);
        for (let i = 0; i < 5; i++) {
          let eventName = results.top_match_events[i].name.text;
          let eventAddress =
            results.top_match_events[i].venue.address.address_1;
          renderSearchResults(eventName, eventAddress, "meetups");
        }
      }
    });
});
