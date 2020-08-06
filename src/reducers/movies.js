import * as actions from './actionTypes';

const movies = (state = [], action) => {
  if (action.type === actions.ADD_MOVIE) return [...state, action.movie];
  return state;
};

const filterMovies = (filter, movies) => {
  if (filter !== 'All') {
    const filtered = movies.filter(movie => movie.release_date.split('-')[0] === filter);
    return filtered;
  }
  return movies;
};

const filter = (state = 'All', action) => {
  if (action.type === actions.CHANGE_FILTER) return action.release_date;
  return state; 
};

export { movies, filter, filterMovies };
