import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { filterMovie } from './../actions/index';
import { filterMovies } from './../reducers/movies';
import { filter } from './../reducers/movies';
import spinner from './../images/spinner.gif';
import fetchMovies from './../actions/getActions';
import Movie from './../components/Movie';
import YearsFilter from './../components/YearsFilter';

const MoviesList = props => {

    useEffect(() => props.getMovie(), []);
    
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = (
            <div>
              <YearsFilter loadedMovies={results} handleFilterChange={props.handleFilterChange} />
              {
                  results.map(char => (
                   <Movie key = {char.id} object = {char} />
                ))
              }
            </div>
          )
      }
    return content;
}

const mapStateToProps = state => ({
  movies: state.movies,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch(getMovie()),
  filterMovies: season => dispatch(filterMovies(season)),
});

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
