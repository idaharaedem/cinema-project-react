import React from 'react';
import './carousel-item.styles.scss';





const CarouselItem = ({popMovie}) => {



return(
            <div className="myslides fade">
                <img src={`http://image.tmdb.org/t/p/original/${popMovie.backdrop_path}`} alt="slideshow one" className="slideshow-img"/>
                <p> Popular </p>
                <div className="caption-text"> {` ${popMovie.title}`}</div>
                <div className="rating-carousel"> Rating: {` ${popMovie.vote_average}`}</div>
            </div>

)};

export default CarouselItem;