import React from 'react';
import PropTypes from 'prop-types';
import Image from './styles/posterStyles.module.scss';

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
            className={Image.border}
        />   
    )
}

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    poster_path: PropTypes.string.isRequired, 
};

export default Poster;