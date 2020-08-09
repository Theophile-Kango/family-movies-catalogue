import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { filterMovie } from './../actions/index';
import { filterMovies } from './../reducers/movies';
import spinner from './../images/spinner.gif';
import Poster from './../components/Poster';
import YearsFilter from './../components/YearsFilter';

const MoviesList = props => {

    const {getMovie} = props;
   
    useEffect(() => getMovie(), [getMovie]);
    
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = (
            <div>
              <YearsFilter loadedMovies={results} handleFilterChange={props.handleFilterChange} />
              {
                  filterMovies(props.filter, results).map(char => (
                    <Poster key={char.id} object={char} handleClick={props.handleClick} />
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
  handleFilterChange: PropTypes.func.isRequired,
  getMovie: PropTypes.PropTypes.func.isRequired,
  handleClick: PropTypes.PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
