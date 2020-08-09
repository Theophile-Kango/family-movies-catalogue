import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { filterMovie } from './../actions/index';
import { filterMovies } from './../reducers/movies';
import spinner from './../images/spinner.gif';
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
                  filterMovies(props.filter, results).map(char => (
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
  handleFilterChange: year => dispatch(filterMovie(year)),
});

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
