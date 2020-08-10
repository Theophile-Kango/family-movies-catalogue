import React from 'react';
import PropTypes from 'prop-types';

const Movie = ( object ) => {
    const { id, 
            popularity, 
            vote_count,  
            adult, 
            backdrop_path, 
            original_language, 
            title, 
            overview, 
            release_date
    } = object;

    return (
        <section>
            <ul>
                <li>{id}</li>
                <li>{popularity}</li>
                <li>{vote_count}</li>
                <li>Adult: {adult}</li>
                <li><img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt={title} /></li>
                <li>{original_language}</li>
                <li>Title: {title}</li>
                <li>{overview}</li>
                <li>{release_date}</li>
            </ul>
        </section>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    adult: PropTypes.bool.isRequired,
    original_language: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired
};

export default Movie;