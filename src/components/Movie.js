import React from 'react';
import PropTypes from 'prop-types';

const Movie = ( { object } ) => {
    const { id, 
            popularity, 
            vote_count, 
            poster_path, 
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
                <li>{poster_path}</li>
                <li>{adult}</li>
                <li>{backdrop_path}</li>
                <li>{original_language}</li>
                <li>{title}</li>
                <li>{overview}</li>
                <li>{release_date}</li>
            </ul>
        </section>
    )
}

Movie.propTypes = {
    id: PropTypes.string,
    popularity: PropTypes.string,
    vote_count: PropTypes.string,
    poster_path: PropTypes.string,
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    original_language: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string
}.isRequired;

export default Movie;