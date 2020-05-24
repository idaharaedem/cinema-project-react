import React from 'react';
import './moviedetails-items.styles.scss';


const MovieDetailsImage = ({selected}) => {
    return(
        <img src={`http://image.tmdb.org/t/p/w780/${selected.backdrop_path}" alt="Movie selected backdrop`}/>
    )
}