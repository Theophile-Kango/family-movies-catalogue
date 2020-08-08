
const fetchMovies = async () => {
    const key = '3b768dc47bb8d9b1c7d61697414b1e93&query';
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}=Family`;
    const response = await fetch(api, { mode: 'cors' });
    const data = await response.json();
    return data;

}

export default fetchMovies;