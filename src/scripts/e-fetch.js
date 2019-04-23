const searchItem = "tech";
const token = "2S2M6RAC5OSTZR7PQSQJ";

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchItem}& location.address=nashville & token=${token}`), {
  "headers": {
    "Accept": "application/json",
    "authorizations": `Bearer ${token}`
  }
}
  .then(data => data.json())
  .then(results => { console.log(results) })