import * as actions from './actionTypes';

const initialState = {
  items: [],
}
const movies = (state = initialState, action) => {
  switch(action.type){
    case actions.FETCH_MOVIES:
      return { items: action.data }
    default:
      return state;
    }
};

const filterMovies = (filter, movies) => {
  if (filter !== 'All') {
    const filtered = movies.filter(movie => movie.release_date.split('-')[0] === filter);
    return filtered;

  }
  return movies;
};

const filterMovieId = (filter, movies) => {
  //return movies.filter(movie => movie.id === action);
  console.log(filter)
}

const filterId = (state='all', action) => {
  switch(action.type){
    case actions.FILTER_BY_ID:
        return action.id;
      default:
        return state;
  }
}

const filter = (state = 'All', action) => {
  switch(action.type){
    case actions.CHANGE_FILTER:
      return action.release_date;
    default:
      return state;
  }
};

export { movies, filter, filterMovies, filterMovieId, filterId };
