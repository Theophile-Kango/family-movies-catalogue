/* eslint-disable camelcase */
import { movies, filterMovies, filter } from '../reducers/movies';
import * as actions from '../reducers/actionTypes';

const data = {
  items: [{
    id: 491418,
    popularity: 18.999,
    voteCount: 1515,
    adult: false,
    backdropPath: '/mXowJ0usjsCgI9hM0BSIoTVnKRI.jpg',
    title: 'Instant Family',
    originalLanguage: 'en',
    overview: `When Pete and Ellie decide to start a family, they stumble 
      into the world of foster care adoption. They hope to take in one small 
      child but when they meet three siblings, including a rebellious 15 year old girl, 
      they find themselves speeding from zero to three kids overnight.`,
    release_date: '2018-11-16',
  },
  ],
};

describe('movies reducer', () => {
  expect(
    movies(
      data,
      {
        type: actions.FETCH_MOVIES,
        data: data.items,
      },
    ),
  ).toEqual(
    data,
  );
});

describe('filter reducer', () => {
  const { items: [{ release_date }] } = data;

  test('Should only return the release date if we pass the production year', () => {
    expect(filter('2018',
      {
        type: actions.CHANGE_FILTER,
        release_date,
      })).toEqual(release_date);
  });
});

describe('filterMovies reducer', () => {
  test('Should only return the data of the production year passed', () => {
    expect(filterMovies('2018', data.items)).toEqual(data.items);
  });
});
