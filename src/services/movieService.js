import movies from '../movies.js';
import {v4 as uuidv4} from 'uuid';
import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}){
        let query = Movie.find({});
        if(filter.search){
            // TODO : fix partial search case insensitive search
            query = query.where({name: filter.search})
        };

        if(filter.genre){
            query = query.where({genre: filter.genre});
        };

        if(filter.year){
            query = query.where({year: Number(filter.year)})
        }

        return query;
    },
    findMovie(movieId){
        //TODO : If no movie with given id
        const movie = Movie.findById(movieId)
    
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

