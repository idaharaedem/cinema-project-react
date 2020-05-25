import React from 'react';
import {wordLimit} from '../base'
import './search-item.styles.scss';

const SearchItem = ({search}) => (
    <div className="search-poster">
        <img src={`http://image.tmdb.org/t/p/original/${search.poster_path}`}/>
        <div className="search-rating"> {search.vote_average}</div>
        <div className="search-title"> {wordLimit(search.title)} </div>
    </div>
)

export default SearchItem