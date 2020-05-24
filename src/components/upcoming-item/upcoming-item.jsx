import React from 'react';
import {wordLimit} from '../base';

import './upcoming-item.styles.scss';

const Upcoming = ({upcoming}) => (
    <div class="upcoming-poster">
        <img src={`http://image.tmdb.org/t/p/original/${upcoming.poster_path}`}/>
        <div class="upcoming-rating"> ${upcoming.vote_average} <i class="ion-ios-star-outline"></i> </div>
        <div class="upcoming-title"> ${wordLimit(upcoming.title)} </div>
    </div>
)

export default Upcoming;