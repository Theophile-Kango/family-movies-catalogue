import * as actions from './../reducers/actionTypes';

const fetchMovies = (theme) => dispatch => {
    const key = '3b768dc47bb8d9b1c7d61697414b1e93&query';
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}=${theme}`;

    fetch(api)
    .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => dispatch({
        type: actions.FETCH_MOVIES,
        data,
    }))
    .catch(err => {
        //setIsLoading(false);
        console.log(err.message)
        //return err;
    });
}

export default fetchMovies;