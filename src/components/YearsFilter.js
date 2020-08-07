import React, { useState } from 'react';
import PropTypes from 'prop-types';

const YearsFilter = (props) => {

   const [selectedYear, setSelectedYear] = useState('All');

  const yearSelectHandler = event => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  return (
    <div>
      <h3>Production Year</h3>
        <select
            onChange={yearSelectHandler}
            value={selectedYear}
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
