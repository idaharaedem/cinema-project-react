import React from 'react';
import './movieDetailsPage.styles.scss';
import {Route} from 'react-router-dom';
import Nav from '../../components/nav/nav'
import MovieDetails from '../../components/movieDetails/movieDetails';
import SimilarMovie from '../../components/similarmovies/similarmovie';
import Footer from '../../components/footer/footer';


const MovieDetailsPage =({history,match}) => {
    
    
    return(
        <div>
            <Nav/>
            <MovieDetails match={match}/>
            <SimilarMovie history={history} match={match}/>
            <Footer/>
        </div>
    )
}

export default MovieDetailsPage;