const img = document.querySelector('img');

function fetchGif(keyword) {
    img.src = '#'
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9nB4AH7jn7x420ixM1MeKVwCupvsTm6k&s=${keyword}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
        img.alt = keyword;
    })
    .catch(e => {
        img.alt = "Can't find a gif matching your search terms :C"
    })
}

function searchCat() {
    fetchGif('cat');
}

function searchTerm() {
    let term = searchBar.value;
    fetchGif(term);
}

const randomCat = document.querySelector('.random-cat');
const searchBar = document.querySelector('input');
const search = document.querySelector('.search');
randomCat.addEventListener("click", searchCat);
search.addEventListener("click", searchTerm);

// Perform search function on pressing Enter key within input field
searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search.click();
    }
});

// Show cat on page load
searchCat();