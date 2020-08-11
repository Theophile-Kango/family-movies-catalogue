import React, { useCallback }  from 'react';
import PropTypes from 'prop-types';
import styles from './styles/posterStyles.module.scss';

const YearsFilter = (props) => {

  const { handleFilterChange } = props;

  const yearSelectHandler = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);
  
  return (
    <div className={styles.header}>
      <h1>Movies Catalogue</h1>
      <div>
        <label htmlFor="production" >Select By Production Year</label>
        <select
          id="production"
          onChange={yearSelectHandler}
        >
            <option>All</option>
            {props.loadedMovies.map(elt => elt.release_date.split('-')[0])
            .filter((v, i, a) => a.indexOf(v) === i)
            .sort((a, b) => b - a)
            .map(year => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}   
        </select>
      </div>
    </div>
  );
}

YearsFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  loadedMovies: PropTypes.array.isRequired
};

export default YearsFilter;
