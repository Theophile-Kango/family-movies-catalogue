import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MoviesList from './../containers/MoviesList';
import Movie from './Movie';
import './../App.css';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/:title" component={Movie} />
      </div>
    </Router>
  );
}

export default App;
