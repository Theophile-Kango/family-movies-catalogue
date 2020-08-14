/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/movieStyles.module.scss';

const Movie = ({ location }) => {
  const {
    popularity,
    voteCount,
    adult,
    backdropPath,
    originalLanguage,
    title,
    overview,
    releaseDate,
  } = location.state;
  return (
    <section className={styles.section}>
      <ul>
        <li><strong id={styles.title}>{title}</strong></li>
        <li><img src={`https://image.tmdb.org/t/p/w500${backdropPath}`} alt={title} /></li>
        <li>
          <strong>Popularity: </strong>
          {popularity}
        </li>
        <li>
          <strong>Vote count: </strong>
          {voteCount}
        </li>
        <li>
          <strong>Adult: </strong>
          {adult === true ? ' Yes' : ' No'}
        </li>
        <li>
          <strong>Original Language: </strong>
          {originalLanguage}
        </li>
        <li>
          <strong>Overview: </strong>
          {overview}
        </li>
        <li>
          <strong>Realease date: </strong>
          {releaseDate}
        </li>
        <li>
          <Link
            to={{
              pathname: '/',
            }}
          >
            Back
          </Link>
        </li>
      </ul>
    </section>
  );
};

Movie.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
      voteCount: PropTypes.number.isRequired,
      adult: PropTypes.bool.isRequired,
      backdropPath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      originalLanguage: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Movie;
