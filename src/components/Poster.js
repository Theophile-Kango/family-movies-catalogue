import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Movie from './Movie';

const Poster = ( props ) => {
    const {
        object: {
            id,  
            poster_path,  
            title, 
        } 
    } = props;
    
    const noSpaces = title.split(' ').join('');

    return (
        <Router> 
            <div>
                <Link to={{pathname: `/${noSpaces}`}}><img key={id} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} /></Link>
                <Switch>
                    <Route exact path="/:noSpaces">
                        <Movie object={props.object} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

Poster.propTypes = {
    id: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
}.isRequired;

export default Poster;