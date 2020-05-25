import React, {useState, useEffect} from 'react';
import {GetSimilar} from '../../API/api';
import SimilarMovieItem from '../similarmovie-item/similarmovie-item';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';


import './similarmovie.styles.scss';


const SimilarMovie =({history,match:{params}})=> {
    console.log(history)
    const [similar,setSimilar] = useState([]);

    useEffect(()=> {
        const fetchSimilar = async() => {
            const data = await GetSimilar(params.id);
            setSimilar(data);
        }

        fetchSimilar();
    }, []);

    const properties = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
       
      };

    return(
        <section class="section-similarMovies">
                <div class="sm-header row">
                    <h3> Similar Movies </h3>
                </div> 

                <div class="sm-slider">
                    <div class="sm-wrapper">
                        <Slider  {...properties}>
                        {   
                            similar.map((movie) => 
                            <SimilarMovieItem 
                            key={movie} similar={movie} 
                            />)
                        }
                        </Slider >
                    </div>
                </div>

        </section>
    )
}

export default SimilarMovie