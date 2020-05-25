import React, {useState, useEffect} from 'react';
import {GetTrending} from '../../API/api';
import Trendingdesc from '../trending-desc/trending-desc';

import './trending.styles.scss';

const Trending = () => {

    const [trending, setTrending] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await GetTrending();
            setTrending(data);
        }

        fetchData();
    },[]);

    const renderResults = (results, page = 1, resulstPerPage = 1) => {
    
        const start = (page - 1) * resulstPerPage ;
        const end = page * resulstPerPage;
    
       return results.slice(start,end).map(element => <Trendingdesc trending={element}/>);
    }

    return(
            <div className="trending">
                    <h2> Trending</h2>
                    {
                       renderResults(trending)
                    }
            </div>        
                

       
    )
}

export default Trending;