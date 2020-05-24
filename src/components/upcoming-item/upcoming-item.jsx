import React from 'react';
import {wordLimit} from '../base';

import './upcoming-item.styles.scss';

const Upcoming = ({upcoming}) => (
    <div className="upcoming-poster">
        <img src={`http://image.tmdb.org/t/p/original/${upcoming.poster_path}`}/>
        <div className="upcoming-rating"> {upcoming.vote_average} <i class="ion-ios-star-outline"></i> </div>
        <div className="upcoming-title"> {wordLimit(upcoming.title)} </div>
    </div>
)

export default Upcoming;