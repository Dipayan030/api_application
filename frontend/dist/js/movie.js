const searchButton = document.querySelector('#searchButton');
const movieName = document.querySelector('#movieName');

searchButton.addEventListener("click" , () => {
    const movieName = document.querySelector('#movieName').value;
    if (movieName) {
        window.location.href = `search-movies.html?q=${encodeURIComponent(movieName)}`;
    }
    console.log(movieName);
});

movieName.addEventListener("keydown" , (event) => {
    if (event.key === 'Enter'){
        const movieName = document.querySelector('#movieName').value;
        if (movieName) {
            window.location.href = `search-movies.html?q=${encodeURIComponent(movieName)}`;
        }
        console.log(movieName);
    }
});