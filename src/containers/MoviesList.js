import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovie } from '../actions/index';
import { filterMovie } from './../actions/index';
import { filterMovies} from './../reducers/movies';
import spinner from './../images/spinner.gif';
import Poster from './../components/Poster';
import YearsFilter from './../components/YearsFilter';

const MoviesList = props => {

    const {getMovie, handleFilterChange, filter} = props;
   
    useEffect(() => getMovie(), [getMovie]);
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = ( 
            
              <div>
                <YearsFilter loadedMovies={results} handleFilterChange={handleFilterChange} /> 
                  {
                    filterMovies(filter, results).map(movie => ( 
                      <Link
                        key={movie.id}
                        to={{
                          pathname: `/${movie.title.split(' ').join('')}`,
                          state: {
                            id: movie.id,
                            popularity: movie.popularity, 
                            vote_count: movie.vote_count,  
                            adult: movie.adult, 
                            backdrop_path: movie.backdrop_path, 
                            title: movie.title,
                            original_language: movie.original_language, 
                            overview: movie.overview, 
                            release_date: movie.release_date,
                          }
                        }}
                      >  
                        <Poster 
                          key={movie.id} 
                          title={movie.title} 
                          id={movie.id} 
                          poster_path={movie.poster_path} 
                        /> 
                      </Link>   
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
  handleFilterChange: year => dispatch(filterMovie(year))
});

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
