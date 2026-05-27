const API_KEY = 'e17d1576';

window.onload = async function() {
    const params = new URLSearchParams(window.location.search);
    const movieName = params.get('q');
    
    if (movieName) {
        // document.querySelector('#movieName').value = movieName;
        const API_URL = `http://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`;
        try{
            const response = await fetch(API_URL);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const movieData = await response.json();
            // console.log(movieData);
            fetchMovieDetails(movieData);
        }
        catch (error) {
            console.error('could not fetch data:',error);
        }
    }
};

async function findMovies(movieName){
    if (movieName) {
        // document.querySelector('#movieName').value = movieName;
        const API_URL = `http://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`;
        try{
            const response = await fetch(API_URL);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const movieData = await response.json();
            // console.log(movieData);
            fetchMovieDetails(movieData);
        }
        catch (error) {
            console.error('could not fetch data:',error);
        }
    }
};

async function fetchMovies(imdbID) {
    try{
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
        }
        const detailedMovieData = await response.json();
        // console.log(detailedMovieData);
        displayMovies(detailedMovieData);
    }
    catch (error){
        console.error('could not fetch data:',error);
    }
};

const searchButton = document.querySelector('#searchButton');
const movieName = document.querySelector('#movieName');

searchButton.addEventListener("click" , () => {
    const movieName = document.querySelector('#movieName').value;
    const movieContainer = document.querySelector('#movieContainer');
    movieContainer.innerHTML = "";
    findMovies(movieName);
    console.log(movieName);
});

movieName.addEventListener("keydown" , (event) => {
    const movieName = document.querySelector('#movieName').value;
    const movieContainer = document.querySelector('#movieContainer');
    movieContainer.innerHTML = "";
    findMovies(movieName);
});

const fetchMovieDetails = (movieData) => {
    movieData.Search.forEach(movie => { 
        const detailedMovieData = fetchMovies(movie.imdbID);
    })
};
 
const displayMovies = (detailedMovieData) => {
    const movieContainer = document.querySelector('#movieContainer');
    movieContainer.innerHTML += `
    <div class="h-186 bg-gray-100 p-2 flex flex-col gap-2 rounded-xl">
        <div class="h-4/6 w-full bg-amber-100 rounded-xl">
            <img src="${detailedMovieData.Poster}" alt="" class="size-full rounded-lg object-cover">
        </div>
        <div class="h-auto w-full p-2 font-poppins flex flex-col gap-0.5 text-lg font-bold">
            <h1 class="text-2xl mb-2">${detailedMovieData.Title}</h1>
            <p class="text-gray-500">${detailedMovieData.Type} • Sci-fi • ${detailedMovieData.Year}</p>
            <p class="text-gray-500">IMDb: ${detailedMovieData.Ratings[0].Value}</p>
            <p class="text-gray-500">Rotten Tomatoes: ${detailedMovieData.Ratings[0].Value}</p>
        </div>
        <div class="h-full w-full flex items-stretch">
            <button class="h-12 rounded-lg self-end w-full bg-gray-300 flex justify-center items-center font-poppins text-gray-500 text-xl hover:bg-violet-400 hover:text-white">+ Add</button>
        </div>
    </div>
    `;
    // movieContainer.innerHTML += movieCard;
    // console.log(detailedMovieData.Title);
};