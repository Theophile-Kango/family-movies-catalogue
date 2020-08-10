import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MoviesList from './../containers/MoviesList';
import './../App.css';

const App = () => {

  return (
    <div className="App">
     <MoviesList />
    </div>
  );
}

export default App;
