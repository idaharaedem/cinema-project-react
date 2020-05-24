import React from 'react';

const Trendingdesc =({trending}) => (
<section className="section-trending">  
    <div className="trending-desc">
        <div className="trending-title"> {trending.title}</div>
        <div class="trending-overview">  {trending.overview}</div>
        <div class="trending-rating"> Rating: {trending.vote_average} </div>
    </div>

    <div class="trending-img">
        <img src={`http://image.tmdb.org/t/p/original/${trending.backdrop_path}`}/>
    </div> 
</section>

)

export default Trendingdesc;