import React from 'react';
import './movieDetailsPage.styles.scss';
import {Route} from 'react-router-dom';
import MovieDetails from '../../components/movieDetails/movieDetails';
import Nav from '../../components/nav/nav'

const MovieDetailsPage =({match}) => {
    
    
    return(
        <div>
            <Nav/>
            <MovieDetails match={match}/>
        </div>
    )
}

export default MovieDetailsPage;