import React, { useCallback } from 'react';
import PropTypes from 'prop-types';


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
    
    return (
        
                <img  
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`} 
                    id={id}
                    alt={title}
                    onClick={handleClick} 
                />
            
          
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