import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Movie from './Movie';


const Poster = (  {
    id, 
    popularity,
    poster_path, 
    vote_count,  
    adult, 
    backdrop_path, 
    original_language, 
    title, 
    overview, 
    release_date,
    handleClick
} ) => {
    const noSpaces = title.split(' ').join('');
    return (
        <Router>
            <Link to={{pathname: `/${noSpaces}`}}>
                <img  
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`} 
                    id={id}
                    alt={title}
                    onClick={handleClick} 
                />
            </Link>
            <Switch>
                <Route exact path="/:noSpaces">
                    <Movie 
                        id={id} 
                        popularity={popularity} 
                        vote_count={vote_count}  
                        adult={adult} 
                        backdrop_path={backdrop_path}
                        original_language={original_language} 
                        title={title} 
                        overview={overview} 
                        release_date={release_date}
                    />
                </Route>
            </Switch> 
        </Router>  
    )
}

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    popularity: PropTypes.number.isRequired, 
    vote_count: PropTypes.number.isRequired,  
    adult: PropTypes.bool.isRequired, 
    original_language: PropTypes.string.isRequired,  
    overview: PropTypes.string.isRequired, 
    release_date: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Poster;