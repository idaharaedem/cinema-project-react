import React from 'react';
import cinema from '../../img/cinema-logo.png';
import {Link} from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => {
return(
    <div className="row">
        <nav>
            <Link to="/"><img className="cinema-logo" src={cinema}  /></Link>

            <form className="search">
                <input className="search_field" type="text" placeholder="Search Movies"/>
                <button className="search__btn"> Search </button>
            </form>          
        </nav>
    </div>

);}

export default Nav;
