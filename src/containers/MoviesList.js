import React, { useState, useEffect } from 'react';

const MoviesList = props => {
    const [loadedChars, setLoadedChars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        console.log('useEffect runs');
        setIsLoading(true);
        const key = '3b768dc47bb8d9b1c7d61697414b1e93&query';
        const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}=Action`;
        fetch(api)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch.');
            }
            return response.json();
          })
          .then(charData => {
            const selectedCharacters = charData.results;
    
            setIsLoading(false);
            setLoadedChars(
              selectedCharacters.map((char, index) => ({
                name: char.release_date.split('-')[0],
                id: index
              }))
            );
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }, []);
    
      let content = <p>Loading characters...</p>;
    
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
                    {char.name}
                </option>
                ))}
            </select>
          </div>
        );
      } else if (!isLoading && (!loadedChars || loadedChars.length === 0)) {
        content = <p>Could not fetch any data.</p>;
      }
      return content;
}

export default MoviesList;