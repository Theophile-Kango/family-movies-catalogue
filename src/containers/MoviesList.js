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

    const {getMovie, handleFilterChange, filter} = props;
   
    useEffect(() => getMovie(), [getMovie]);
    const hello = () => {

    }
    
      let content = <img src={spinner} alt="loading" />;
      const { movies: {items: {results}}} = props;
        if(results !== undefined){
          content = ( 
            
              <div>
                <YearsFilter loadedMovies={results} handleFilterChange={handleFilterChange} /> 
                  {
                    filterMovies(filter, results).map(char => (   
                      <Poster 
                        key={char.id} 
                        title={char.title} 
                        id={char.id} 
                        poster_path={char.poster_path} 
                         
                        popularity={char.popularity} 
                        vote_count={char.vote_count}  
                        adult={char.adult} 
                        backdrop_path={char.backdrop_path}
                        original_language={char.original_language} 
                        title={char.title} 
                        overview={char.overview} 
                        release_date={char.release_date}
                        handleClick={() => console.log(char.id)}/>    
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
