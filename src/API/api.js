import axios from 'axios';

const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';

export const getPopular = async() => {
    
    
    try{
        const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);
       
            const popularMovies = result.data.results;
            return popularMovies;
  
    }
    catch(error){
        alert(error);
    }
}

export const NowShowing = async() => {
   
        try {
            const res =  await axios (`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`);
            const nowShowing = res.data.results;
            return nowShowing;
        }

        catch(error) {
            alert(error);
        }
        
    
}

export const MovieSelected = async(movieId) => {

    try {
        const movie = await axios(`http://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=videos`);
        const movieDet = movie.data;
        return movieDet;
    }
    catch(error){
        alert(error);
    }
}

export const UpcomingApi = async() => {

    try {
        const res = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`);
        const upcomingMovies = res.data.results;
        return upcomingMovies;
    }
    catch(error) {
       console.log(error); 
    }
}

export const GetTrending = async() => {
    
    try {
        const res = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
         const getTrending = res.data.results;
         return getTrending;
         
    }

    catch (error) {
        alert(error);
    }

}

export const GetTopRated = async() => {

    try {
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`);
         const topRated = res.data.results;
         return topRated;
        
    } 
    catch(error) {
        console.log(error);
    }
}



export const GetSimilar = async(movieId) => {

     try {
        const movie = await axios(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${key}&language=en-US&page=1`);
        const similar = movie.data.results;
        return similar;
        
    }
    catch(error){
        alert(error);
    } 
}



    export const GetSearch = async(query) => {
    
        try {
        const {data:{results}} = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);
        const res = results
        return res;
        }
        catch (error) {
            console.log(error)
        }
    }
    
