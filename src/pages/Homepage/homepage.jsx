import React from 'react';
import {Nav,Carousels, ShowingUpcoming, Trending, TopRated, Footer} from '../../components'


const Homepage = () => {
    return(
        <div>
            
             <Nav/>
             <Carousels/>
             <ShowingUpcoming/>
             <Trending/>
             <TopRated/>
             <Footer/>
        </div>
       
        
    )
}

export default Homepage;