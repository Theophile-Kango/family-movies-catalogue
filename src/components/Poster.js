/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';
import Image from './styles/posterStyles.module.scss';

const Poster = ({
  id,
  title,
  posterPath,
}) => (
  <img
    src={`https://image.tmdb.org/t/p/w300${posterPath}`}
    id={id}
    alt={title}
    className={Image.border}
  />
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default Poster;
