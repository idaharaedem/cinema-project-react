import React, {useState,useEffect} from 'react';
import {GetSearch} from '../../API/api'
import './search.styles.scss';
import SearchItem from '../search-item/search-item';
import {Link} from 'react-router-dom';

const Search = () => {

const searchedItem = window.localStorage.getItem('search');
console.log(searchedItem)

    const [search, setSearched] = useState([]);

    useEffect(()=> {
        const fetchData = async()=> {
            const data = await GetSearch(searchedItem);
            setSearched(data)
        }
        fetchData();
    }, [])

return  (
    <section className="search-section">
        <div className="search-header row">
            <h3> Movies </h3>
        </div> 

        <div className="row search-container">
            
                {
                    search.map((movie=> 
                    <Link to={`/moviedetails/${movie.id}`}><SearchItem search={movie} /></Link>))
                }

        </div>
    </section>

    )
}
export default Search;