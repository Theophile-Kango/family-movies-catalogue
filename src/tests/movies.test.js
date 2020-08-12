import { movies } from '../reducers/movies';
import FETCH_MOVIES from '../reducers/actionTypes';

describe('movies reducer', () => {
  const data = { 
      items: [{
        id: 491418,
        popularity: 18.999,
        voteCount: 1515,
        adult: false,
        backdropPath: "\/mXowJ0usjsCgI9hM0BSIoTVnKRI.jpg",
        title: "Instant Family",
        originalLanguage: "en",
        overview: `When Pete and Ellie decide to start a family, they stumble 
        into the world of foster care adoption. They hope to take in one small 
        child but when they meet three siblings, including a rebellious 15 year old girl, 
        they find themselves speeding from zero to three kids overnight.`,
        releaseDate: "2018-11-16",
      }
  ]};

  const intialState = { items: []}

  test('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(intialState);
  });

  test('should handle FETCH MOVIES', () => {
    expect(
      movies(intialState, {
        type: FETCH_MOVIES,
        data: data,
      }),
    ).not.toEqual(
        data,
    );

    expect(
      movies(
        data,
        {
          type: FETCH_MOVIES,
          data,
        },
      ),
    ).toEqual(
      data,
    );
  });
});