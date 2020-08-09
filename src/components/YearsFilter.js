import React, { useCallback }  from 'react';
import PropTypes from 'prop-types';

const YearsFilter = (props) => {

  const yearSelectHandler = useCallback(event => {
    props.handleFilterChange(event.target.value);
  }, [props.handleFilterChange]);
  
  return (
    <div>
      <h3>Production Year</h3>
        <select
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
  );
}

YearsFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  loadedMovies: PropTypes.array.isRequired
};

export default YearsFilter;
