import movies from '../movies.js';
import {v4 as uuidv4} from 'uuid';

export default {
    findMovie(movieId){
        //TODO : If no movie with given id
        const movie = movies.find(movie => movie.id === movieId);
    
        return movie;
    
    },

    createMovieData(movieData){
        const newId = uuidv4();
        movies.push({
            id : newId,
            ...movieData
        });

        return newId
    }
}

