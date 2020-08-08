import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMovie } from '../actions/index';
import { filterMovie } from './../actions/index';
import { filterMovies } from './../reducers/movies';
import { filter } from './../reducers/movies';
import spinner from './../images/spinner.gif';
import fetchMovies from './../actions/getActions';
import Movie from './../components/Movie';
import ThemesMovies from './../components/ThemesMovies';
import YearsFilter from './../components/YearsFilter';

const MoviesList = props => {

    useEffect(() => props.fetchMovies(props.theme), [props.theme]);
    
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = (
            <div>
              <ThemesMovies onThemeSelect={props.onThemeSelect} theme={props.theme} />
              {
                  results.map(char => (
                   <Movie key = {char.id} object = {char} />
                ))
              }
            </div>
          )
      }
    

      // if (!isLoading && loadedMovies && loadedMovies.length > 0) {
      //   content = (
      //     <div>
      //       <ThemesMovies onThemeSelect={props.onThemeSelect} theme={props.theme} />
      //       <YearsFilter loadedMovies={loadedMovies} handleFilterChange={props.handleFilterChange} />
      //       {filterMovies(filter, loadedMovies).map(char => (
      //           <Movie key = {char.id} object = {char} />
      //       ))}
      //     </div>
      //   );
      // } 
      return content;
}

// const mapStateToProps = state => ({
//   movies: state.movies,
//   filter: state.filter,
// });

const mapStateToProps = state => ({
  movies: state.movies
});

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onThemeSelect: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};

MoviesList.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { fetchMovies })(MoviesList);
