import React from 'react';
import {wordLimit} from '../base'

import './similarmovie-item.styles.scss';



const SimilarMovieItem = ({similar}) => {


  

return(
    <div  className="sm-poster">
        <img src={`http://image.tmdb.org/t/p/original/${similar.poster_path}`}/>
        <div className="sm-rating"> {similar.vote_average} </div>
        <div className="sm-title"> {wordLimit(similar.title)} </div>
    </div>
)
}
export default SimilarMovieItem;