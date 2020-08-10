import { combineReducers } from 'redux';
import { movies, filter } from './movies';

export default combineReducers({ movies, filter });
