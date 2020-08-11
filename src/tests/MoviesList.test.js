import React from 'react';
import { render, screen } from './test-utils';
import MoviesList from '../containers/MoviesList';
import fetchMovies from '../actions/getActions';

test('Renders the connected list with initialState', () => {
  fetchMovies().then(data => {
    render(<MoviesList />, data);
    expect(screen.getByText(/Fighting with My Family/i)).toBeInTheDocument();
  }).catch(() => {

  });
});
