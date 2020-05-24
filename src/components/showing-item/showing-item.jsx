import React from 'react';
import {wordLimit} from '../base'

import './showing-item.styles.scss';

const NowShowing = ({ns}) => {

    return(
        <div className="ns-poster">
            <img src={`http://image.tmdb.org/t/p/original/${ns.poster_path}`}/>
            <div className="ns-rating"> {ns.vote_average} </div>
            <div className="ns-title"> {wordLimit(ns.title)} </div>
        </div>
    )
}

export default NowShowing;