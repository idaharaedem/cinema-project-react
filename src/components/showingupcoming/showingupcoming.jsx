import React, {useState,useEffect} from 'react';
import {NowShowing, UpcomingApi} from '../../API/api'
import ShowingItem from '../showing-item/showing-item';
import Upcoming from '../upcoming-item/upcoming-item';
import Slider from 'react-slick';

import {Link} from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './showingupcoming.styles.scss';



const ShowingUpcoming = () => {
    
    const [showing, setShowing] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await NowShowing();
            setShowing(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            const data = await UpcomingApi();
            setUpcoming(data);
        }

        fetchData();
    }, [])


    const properties = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
       
      };
    
    return(
        <section className="section-now-showing" id="ns">
             <div className="heading">
                 <h3> Now Showing. </h3>
                 

                <div className="ns-post-slider">
                        <div className="ns-poster-wrapper">
                            
                            
                            <Slider {...properties}>
                            {
                                showing.map((movie)=> <Link to={`/moviedetails/${movie.id}`}><ShowingItem 
                                    key = {movie.id} 
                                    ns = {movie}/></Link>)
                            }
                            </Slider> 
                            
                        </div>
                </div>
            </div> 

            <hr className="hr-2"/>
            <hr className="hr-1"/>

            <div className="row upcoming-header">
                <h3> Upcoming </h3>
            </div> 

            <div className="upcoming-slider">
                <div className="upcoming-wrapper">
                <Slider {...properties}>
                            {
                                upcoming.map((movie)=> <Link to={`/moviedetails/${movie.id}`}><Upcoming 
                                    key = {movie.id} 
                                    upcoming = {movie}/></Link>)
                            }
                </Slider> 
                </div>
            </div>
        </section>
    )
}

export default ShowingUpcoming;