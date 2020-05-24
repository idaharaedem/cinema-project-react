import React from 'react';
import {Nav,Carousels, ShowingUpcoming, Trending, TopRated} from '../../components'
import {Route} from 'react-router-dom';

const Homepage = () => {
    return(
        <div>
             <Nav/>
             <Carousels/>
             <ShowingUpcoming/>
             <Trending/>
             <TopRated/>
        </div>
       
        
    )
}

export default Homepage;