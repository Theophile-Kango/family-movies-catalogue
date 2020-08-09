import React from 'react';
import PropTypes from 'prop-types';

const Poster = ( { object } ) => {
    const { id, 
            title, 
            poster_path, 
    } = object;

    return ( 
        <div>
            <img key={id} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        </div>
    )
}

Poster.propTypes = {
    id: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string
}.isRequired;

export default Poster;