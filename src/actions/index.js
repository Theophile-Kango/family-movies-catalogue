import * as actions from '../reducers/actionTypes';
import fetchMovies from './getActions';

export const getMovie = () => dispatch => {
  fetchMovies().then(data => {
    dispatch({
      type: actions.FETCH_MOVIES,
      data,
    });
  });
};

export const filterMovie = release_date => ({
  type: actions.CHANGE_FILTER,
  release_date,
});
