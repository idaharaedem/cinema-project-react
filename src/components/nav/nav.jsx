import React from 'react';
import cinema from '../../img/cinema-logo.png';
import {Link, withRouter} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll'



import './nav.styles.scss';

const Nav = ({props}) => {
let value = '';

 

const handleSubmit = (event) => {
  event.preventDefault();
  const searchValue = value;
  window.localStorage.setItem('search', searchValue);
  if(searchValue)
  window.location.href= `/search/${searchValue}`;

  
}

const handleChange =(event)=> {
    value = event.target.value;
}

return(
    <div className="row">
        <nav>
            <Link to="/"><img className="cinema-logo" src={cinema}  /></Link>
            
               

            <form onSubmit={handleSubmit} className="search">
                <input onChange={handleChange}  className="search_field" name="search" type="text" placeholder="Search Movies"/>
                <button  className="search__btn" type="submit"> Search </button> 
            </form>          
        </nav>
    </div>

);}

export default withRouter (Nav);
