import React from 'react';
import {Nav,Carousels, ShowingUpcoming} from '../../components'
import {Route} from 'react-router-dom';

const Homepage = () => {
    return(
        <div>
             <Nav/>
             <Carousels/>
             <ShowingUpcoming/>
        </div>
       
        
    )
}

export default Homepage;