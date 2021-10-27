// Constants
const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'Q12TTtYUnHgSTgAoxuKf2ibl9JgdCQf6lnM3qEZl';

// State Variables
let apiData;
// Cached Element References
const $main = $('main');
// Event Listeners

// Functions

getData(); // call function immediately so that data loads on page load

function getData() {
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL + '?api_key=' + API_KEY + '&count=6')
    .then(function(data) {
        apiData = data;
        render();
    }, function(error) {

    });
}

function render() {
    const photoCards = apiData.map(function(photoObject) {
        return`
            <article style="background-image: url(${photoObject.url})">
                <h3>${photoObject.title}</h3>
            </article>`;
    }).join(""); // .map transforms the elements in the array it was called on returning them to a new array
    $main.html(`<section>${photoCards}</section>`);
}
