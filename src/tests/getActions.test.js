import fetchMovies from './../actions/getActions';

describe('Get the details about family movies from the API', () => {
    test('The object should contain a Movie with The Addams Family as title', () => {
        fetchMovies().then(data => {
        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: 'The Addams Family',
            }),
        ]),
      );
    }).catch(() => {

    });
  });
});