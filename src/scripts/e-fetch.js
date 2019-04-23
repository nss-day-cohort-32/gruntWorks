const searchItem = "tech";
const eliotKey = "2S2M6RAC5OSTZR7PQSQJ";

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchItem}&location.address=nashville&start_date.keyword=today&expand=venue`, {
  "headers": {
    "Accept": "application/json",
    "Authorization": `Bearer ${eliotKey}`
  }
})
  .then(data => data.json())
  .then(results => {
    for (let i = 0; i < 5; i++) {
      let eventName = results.top_match_events[i].name.text;
      let eventAddress = results.top_match_events[i].venue.address.address_1;
      // renderSearchResults(eventName, eventAddress);
    }
  })