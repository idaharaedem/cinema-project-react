import React, {useState, useEffect} from 'react';
import CarouselItems from '../carousel-item/carousel-item';
import {Slide} from 'react-slideshow-image';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




import {getPopular} from '../../API/api';


import './carousel.styles.scss';

const Carousels =() => {
    
    const [popMovies, setPopMovies] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getPopular();
            setPopMovies(data);
        }

        fetchData();
    }, []);

    const properties = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4500,
        pauseOnHover:false
        
      };
  
    return(
        <section className="section-carousel">
            <div className="slideshow-container">
                <Slider {...properties}>
                {
                    popMovies.map((movie) => <CarouselItems key={movie.id} popMovie={movie}/>)
                }
               </Slider>
            </div>
            
        </section>
    )
};

export default Carousels;