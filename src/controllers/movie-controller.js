import { Router } from "express";
import movieService from "../services/movieService.js";



const movieController = Router();


movieController.get('/create',(req,res)=>{
    res.render('create')
});

movieController.get('/:movieId/details',async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.findMovie(movieId).lean();
    res.render('details',{movie});
});

movieController.post('/create',(req,res)=>{
    const newMovie = req.body;

    movieService.createMovieData(newMovie);

    res.redirect('/')

    res.end();
});

movieController.get('/search',(req,res)=>{
    const filter = req.query;
    const movies = movieService.getAll(filter);

    res.render('search', {movies, filter});
})

export default movieController;