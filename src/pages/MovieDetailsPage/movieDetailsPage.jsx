import React from 'react';
import './movieDetailsPage.styles.scss';
import {Route} from 'react-router-dom';
import Nav from '../../components/nav/nav'
import MovieDetails from '../../components/movieDetails/movieDetails';
import SimilarMovie from '../../components/similarmovies/similarmovie';


const MovieDetailsPage =({history,match}) => {
    
    
    return(
        <div>
            <Nav/>
            <MovieDetails match={match}/>
            <SimilarMovie history={history} match={match}/>
        </div>
    )
}

export default MovieDetailsPage;