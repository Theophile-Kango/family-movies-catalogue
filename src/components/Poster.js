import React from 'react';
import PropTypes from 'prop-types';

const Poster = (  {
    id, 
    title,
    poster_path, 
} ) => {
    
    return (  
        <img  
            src={`https://image.tmdb.org/t/p/w300${poster_path}`} 
            id={id}
            alt={title}
        />   
    )
}

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    poster_path: PropTypes.string.isRequired, 
};

export default Poster;