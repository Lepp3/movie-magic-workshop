import movies from '../movies.js';


export function findMovie(movieId){
    //TODO : If no movie with given id
    const movie = movies.find(movie => movie.id === movieId);

    return movie;

}