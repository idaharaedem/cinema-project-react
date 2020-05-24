import React, {useState, useEffect}from 'react';
import {GetSimilar, MovieSelected} from '../../API/api';
import MovieDetailsImage from '../moviedetails-desc/moviedetails-image';


import './movieDetails.styles.scss';

const MovieDetails = ({match: {params}}) => {
    
    const [selected,setSelected] = useState([]);

    useEffect(()=> {
        const fetchSelected = async() => {
            const data = await MovieSelected(params.id);
            setSelected(data);
        }

        fetchSelected();
    }, [])
    
    if(selected.videos == null) return null;

    return(
        <section className="section-movieDetails">
            <div className="details-img">
                {
                    <img src={`http://image.tmdb.org/t/p/w780/${selected.backdrop_path}`} alt="Movie selected backdrop"/>
                }
            </div>

            {
            <div className="details-desc">
                    {
                       
                        <MovieDetailsImage selected={selected}/>
                    }
  
            </div>
}
        </section>

    )
}

export default MovieDetails;