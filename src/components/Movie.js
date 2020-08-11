import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/movieStyles.module.scss';

const Movie = ( {location} ) => {
    const { 
        popularity, 
        vote_count, 
        adult, 
        backdrop_path, 
        original_language, 
        title, 
        overview, 
        release_date
    } = location.state;
    return (
        <section className={styles.section}>
            <ul>
                <li><strong id={styles.title}>{title}</strong></li>
                <li><img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} /></li>
                <li><strong>Popularity: </strong>{popularity}</li>
                <li><strong>Vote count: </strong>{vote_count}</li>
                <li><strong>Adult: </strong>{adult === true ? " Yes" : " No"}</li>
                <li><strong>Original Language: </strong>{original_language}</li>
                <li><strong>Overview: </strong>{overview}</li>
                <li><strong>Realease date: </strong>{release_date}</li>
                <li>
                    <Link
                        to={{
                            pathname: "/"
                        }}
                    >  
                        Back
                    </Link>  
                </li> 
            </ul>
        </section>
    )
}

Movie.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            id: PropTypes.number.isRequired,
            popularity: PropTypes.number.isRequired,
            vote_count: PropTypes.number.isRequired,
            adult: PropTypes.bool.isRequired,
            backdrop_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            original_language: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired
        }),
    }).isRequired
};

export default Movie;