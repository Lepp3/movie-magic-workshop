import movies from '../movies.js';
import {v4 as uuidv4} from 'uuid';
import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}){
        return Movie.find({});
    },
    findMovie(movieId){
        //TODO : If no movie with given id
        const movie = Movie.findById(movieId);
    
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

