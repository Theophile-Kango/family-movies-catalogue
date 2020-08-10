import { combineReducers } from 'redux';
import { movies, filter, filterId } from './movies';

export default combineReducers({ movies, filter, filterId });
