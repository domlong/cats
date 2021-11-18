const img = document.querySelector('img');

async function fetchGif(keyword) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9nB4AH7jn7x420ixM1MeKVwCupvsTm6k&s=${keyword}`, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (error) {
        console.log(error);
        img.alt = keyword;
        img.alt = "Can't find a gif matching your search terms :C";
    }
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