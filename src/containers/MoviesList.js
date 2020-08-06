import React, { useState, useEffect } from 'react';
import spinner from './../images/spinner.gif';
import moviesData from './moviesData';
import Movie from './../components/Movie';

const MoviesList = props => {
    const [loadedChars, setLoadedChars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
     useEffect(() => moviesData(setIsLoading, setLoadedChars), []);
    
      let content = <img src={spinner} alt="loading" />;
    
      if (!isLoading && loadedChars && loadedChars.length > 0) {
        content = (
          <div>
            <span>Production Year</span>
            <select
                onChange={props.onCharSelect}
                value={props.selectedChar}
                className={props.side}
            >
                {loadedChars.map(char => (
                <option key={char.id} value={char.id}>
                    {char.release_date.split('-')[0]}
                </option>
                ))}   
            </select>
            {loadedChars.map(char => (
                <Movie
                  key = {char.id} 
                  object = {char} 
                />
            ))}
          </div>
        );
      } 
      return content;
}

export default MoviesList;