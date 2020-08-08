import * as actions from '../reducers/actionTypes';

export const FETCH_MOVIES = 'fetchMovies';

export const filterMovie = release_date => ({
  type: actions.CHANGE_FILTER,
  release_date,
});
