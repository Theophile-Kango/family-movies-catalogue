/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovie, filterMovie } from '../actions/index';
import { filterMovies } from '../reducers/movies';
import spinner from '../images/spinner.gif';
import Poster from '../components/Poster';
import YearsFilter from '../components/YearsFilter';
import styles from '../components/styles/posterStyles.module.scss';

const MoviesList = props => {
  const { getMovie, handleFilterChange, filter } = props;

  useEffect(() => getMovie(), [getMovie]);
  let content = <img id={styles.loading} src={spinner} alt="loading" />;
  const { movies: { items: { results } } } = props;
  if (results !== undefined) {
    content = (

      <div className={styles.main}>
        <YearsFilter loadedMovies={results} handleFilterChange={handleFilterChange} />
        <div>
          {
            filterMovies(filter, results).map(movie => (
              <Link
                key={movie.id}
                to={{
                  pathname: `/${movie.title.split(' ').join('')}`,
                  state: {
                    id: movie.id,
                    popularity: movie.popularity,
                    voteCount: movie.vote_count,
                    adult: movie.adult,
                    backdropPath: movie.backdrop_path,
                    title: movie.title,
                    originalLanguage: movie.original_language,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                  },
                }}
              >
                <Poster
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  posterPath={movie.poster_path}
                />
              </Link>
            ))
                    }
        </div>
      </div>

    );
  }
  return content;
};

const mapStateToProps = state => ({
  movies: state.movies,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch(getMovie()),
  handleFilterChange: year => dispatch(filterMovie(year)),
});

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Object),
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
