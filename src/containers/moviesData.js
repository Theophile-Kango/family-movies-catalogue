const moviesData = (setIsLoading, setLoadedChars) => {
    setIsLoading(true);
    const key = '3b768dc47bb8d9b1c7d61697414b1e93&query';
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}=Love`;
    fetch(api)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(charData => {
        const { results } = charData;

        setIsLoading(false);
        setLoadedChars(
            results.map(({
              id, 
              popularity, 
              vote_count, 
              poster_path, 
              adult, 
              backdrop_path, 
              original_language, 
              title, 
              overview, 
              release_date
            }) => ({
              id, 
              popularity, 
              vote_count, 
              poster_path, 
              adult, 
              backdrop_path, 
              original_language, 
              title, 
              overview, 
              release_date
          }))
        );
      })
      .catch(err => {
        setIsLoading(false);
        return err;
      });
  };

  export default moviesData;