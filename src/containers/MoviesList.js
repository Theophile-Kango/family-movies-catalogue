import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { filterMovie, filterById } from './../actions/index';
import { filterMovies, filterMovieId } from './../reducers/movies';
import spinner from './../images/spinner.gif';
import Poster from './../components/Poster';
import YearsFilter from './../components/YearsFilter';

const MoviesList = props => {

    const {getMovie, handleFilterChange, filter, filterId} = props;
   
    useEffect(() => getMovie(), [getMovie]);
    
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = (
            <div>
              <YearsFilter loadedMovies={results} handleFilterChange={handleFilterChange} />
              {
                  filterMovies(filter, results).map(char => (
                    <Poster key={char.id} object={char} onClick={filterMovieId(results, filterId)} />
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
  filterId: state.id
});

const mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch(getMovie()),
  handleFilterChange: year => dispatch(filterMovie(year)),
  toggleMovie: id => dispatch(filterById(id))
});

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  filterId: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  toggleMovie: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
