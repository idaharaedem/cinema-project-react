import React, {useState, useEffect}from 'react';
import {GetSimilar, MovieSelected} from '../../API/api';


import './movieDetails.styles.scss';

const MovieDetails = ({match: {params}}) => {
    
    const [selected,setSelected] = useState([]);

    useEffect(()=> {
        const fetchSelected = async() => {
            const data = await MovieSelected(params.id);
            
            console.log(data);
            setSelected(data);
        }

        fetchSelected();
    }, [])

    return(
        <section className="section-movieDetails">
            <div className="details-img">
                {

                }
            </div>

            <div className="details-desc">

            </div>
        </section>

    )
}

export default MovieDetails;