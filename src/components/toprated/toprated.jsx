import React, {useState,useEffect} from 'react';
import TopRatedItem from '../toprated-item/toprated-item' 
import {GetTopRated} from '../../API/api';
import {Link} from 'react-router-dom';

import './toprated.styles.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopRated = () => {

    const [topRated, setTopRated] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await GetTopRated();
            setTopRated(data);
        }

        fetchData();
    }, []);

    const properties = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
       
      };


    return(
        <section class="section-topRated"> 
            <div class="row">
                    <h3> Top Rated </h3>
                </div>
            <div class="topRated-wrapper">
                <Slider {...properties}>
                    {
                        topRated.map((movie)=> <Link to={`/moviedetails/${movie.id}`}><TopRatedItem  movie={movie}/></Link> )
                    }
                </Slider>
            </div>

        
        </section>
    )
}

export default TopRated;