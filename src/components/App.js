import React, { useState } from 'react';
import MoviesList from './../containers/MoviesList';
import './../App.css';

const App = () => {

  const [selectedTheme, setSelectedTheme] = useState('Love');

  const themeSelectHandler = event => {
    const theme = event.target.value;
    setSelectedTheme(theme);
  };

  return (
    <div className="App">
     <MoviesList onThemeSelect={themeSelectHandler} theme={selectedTheme} />
    </div>
  );
}

export default App;
