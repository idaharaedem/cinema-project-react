import React from 'react';
import {wordLimit} from '../base';

import './toprated.styles.scss';

export const TopRatedItem =({movie}) => (
    <div class="topRated-poster">
        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        <div class="topRated-rating"> {movie.vote_average} </div>
        <div class="topRated-title"> {wordLimit(movie.title)} </div>
   </div>
);

export default TopRatedItem