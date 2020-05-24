import React from 'react';
import { IoIosPlay} from "react-icons/io";


import './moviedetails-image.styles.scss';



const MovieDetailsImage = ({selected}) => {

    //<a href={`https://www.youtube.com/watch?v=${selected.videos.results[0].key}`} target="_blank"> <IoIosPlay  color="#ffa04b" className="ion-play"/> </a>
    return(
        <div>
            <div className="details-title"> {selected.title}</div>
            <div className="details-overview"> 
                {selected.overview}
            </div>
            <div class="details-genres"> Movie Genre  <h4> {selected.genres[0].name}</h4> </div>
            <div className="details-rating"> Rating: <h4> {selected.vote_average} </h4></div>
            <div className="details-release"> Release Date  <h4>{selected.release_date}: {selected.status} </h4> </div>
            <div className="details-runtime"> Movie Runtime  <h4> {selected.runtime}: Minutes </h4> </div>
            
            
            <div className="details-poster"> 
                <img src={`http://image.tmdb.org/t/p/original/${selected.poster_path}`}/>
            </div>
            
            <div className="trailer">
               {
                <a href={`https://www.youtube.com/watch?v=${selected.videos.results[0].key}`} target="_blank"> <IoIosPlay  color="#ffa04b" className="ion-play"/> </a>
               }
            </div> 
        </div>
    );
   
}

export default MovieDetailsImage