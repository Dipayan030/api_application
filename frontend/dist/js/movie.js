const API_KEY = 'e17d1576';
const movie = 'Money Heist';
async function fetchMovies() {
    const API_URL = `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`;
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieData = await response.json();
        console.log(movieData);
    }
    catch(error){
        console.error('could not fetch data:',error);
    }
}
fetchMovies();