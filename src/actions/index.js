import * as actions from '../reducers/actionTypes';

export const addMovie = movie => ({
  type: actions.ADD_MOVIE,
  movie,
});

export const filterMovie = release_date => ({
  type: actions.CHANGE_FILTER,
  release_date,
});
