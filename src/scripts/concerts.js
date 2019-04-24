console.log('concerts.js');
const concertInput = document.querySelector('#concerts-search-input');
const concertBtn = document.querySelector('#concerts-button');
let genre_Id;

// Genre Ids:
const rock = 'KnvZfZ7vAeA';
const country = 'KnvZfZ7vAv6';
let hipHop = 'KnvZfZ7vAv1';
let pop = 'KnvZfZ7vAev';

// Get user input

concertBtn.addEventListener('click', () => {
    let genre = concertInput.value.toLowerCase();
    if (genre === 'rock') {
        genre_Id = 'KnvZfZ7vAeA';
    } else if (genre === 'country') {
        genre_Id = 'KnvZfZ7vAv6';
    } else if (genre === 'hip hop') {
        genre_Id = 'KnvZfZ7vAv1';
    } else if (genre === 'pop') {
        genre_Id = 'KnvZfZ7vAev';
    } else {
        concertInput.value = '';
        return
    }
    fetchData(genre_Id);
    concertInput.value = '';
})



// Fetch ticketmaster API
function fetchData(genre_Id) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&genreId=${genre_Id}&sort=date,asc&apikey=${ticketmasterKey}`)
        .then(response => response.json())
        .then(results => {
            getConcerts(results);
        })
}

// get 4 results from the api response
function getConcerts(results) {
    for (let i = 0; i < 5; i++) {
        let artist = results._embedded.events[i].name;
        let venue = results._embedded.events[i]._embedded.venues[0].name;
        console.log(`Artist: ${artist}`);
        console.log(`Venue: ${venue}`);
        renderSearchResults(artist, venue);

    }
}

// renderResults params: name, address / artist address (or venue)

// renderItinerary params: category, description / concerts, string

// Artist name, Venue name path:
// _embedded.events[i].name
// _embedded.events[i]._embedded.venues
