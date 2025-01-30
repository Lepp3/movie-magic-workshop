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
        const movie = Movie.findById(movieId);
    
        return movie;
    
    },
    findMovieWithCasts(movieId){
        return this.findMovie(movieId).populate('casts');
    
    },

    createMovieData(movieData){
        const result = Movie.create({
            ...movieData,
            year: Number(movieData.year),
            rating: Number(movieData.rating),
        });
        
        return result;
    },
    
    async attachCast(movieId,castId){
        // First way to attach movie 
        //  const movie = await Movie.findById(movieId);
        //  if(movie.casts.includes(castId)){
        //     return;
        //  }
        // movie.casts.push(castId);
        // await movie.save();

        // return movie;
        
        // Second way to attach movie
        return Movie.findByIdAndUpdate(movieId,{$push: {casts:castId}});
    }
}

