import movies from '../movies.js';
import {v4 as uuidv4} from 'uuid';

export default {
    getAll(filter = {}){
        let result = movies;
        if(filter.name){
            result = result.filter(movie=>(movie.name).toLowerCase().includes((filter.name).toLowerCase()));
        }
        return result
    },
    findMovie(movieId){
        //TODO : If no movie with given id
        const movie = movies.find(movie => movie.id === movieId);
    
        return movie;
    
    },

    createMovieData(movieData){
        const newId = uuidv4();
        movies.push({
            id : newId,
            ...movieData,
            rating: Number(movieData.rating),
        });

        return newId
    }
}

