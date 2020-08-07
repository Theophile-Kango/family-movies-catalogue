import React, { useState, useEffect } from 'react';
import spinner from './../images/spinner.gif';
import moviesData from './moviesData';


const themesMovies = props => {
    const themes = ['Love','Action','Sacrifice','Good','Death','Family','Reason','Faith']
    const [loadedChars, setLoadedChars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
     useEffect(() => moviesData(setIsLoading, setLoadedChars, props.theme), []);
    
      let content = <img src={spinner} alt="loading" />;
    
      if (!isLoading && loadedChars && loadedChars.length > 0) {
        content = (
          <div>
            <span>Movies themes</span>
            <select
                onChange={props.onCharSelect}
                value={props.selectedChar}
                className={props.side}
            >
                {loadedChars.map(char => (
                <option key={char.id} value={char.release_date}>
                    {char.release_date.split('-')[0]}
                </option>
                ))}   
            </select>
            {loadedChars.map(char => (
                <Movie key = {char.id} object = {char} />
            ))}
          </div>
        );
      } 
      return content;
}

export default themesMovies;