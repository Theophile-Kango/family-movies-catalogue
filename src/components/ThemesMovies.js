import React from 'react';
import PropTypes from 'prop-types';

const ThemesMovies = props => {
    const themes = ['Love','Action','Sacrifice','Good','Death','Family','Reason','Faith'];

    return(
        <div>
            <span>Select a theme</span>
            <select
                onChange={props.onThemeSelect}
                value={props.theme}
                className={props.side}
            >
                {themes.map(theme => (
                <option key={theme}>
                    {theme}
                </option>
                ))}   
            </select>
        </div>
    )
}

ThemesMovies.propTypes = {
    theme: PropTypes.string.isRequired,
    onThemeSelect: PropTypes.func.isRequired,
};
  
export default ThemesMovies;