import React from 'react';
import cinema from '../../img/cinema-logo.png';

import './nav.styles.scss';

const Nav = () => {
return(
    <div className="row">
        <nav>
            <img className="cinema-logo" src={cinema}  />

            <form className="search">
                <input className="search_field" type="text" placeholder="Search Movies"/>
                <button className="search__btn"> Search </button>
            </form>          
        </nav>
    </div>

);}

export default Nav;
