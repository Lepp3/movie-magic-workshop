import { Router } from "express";
import movieService from "../services/movieService.js";



const movieController = Router();


movieController.get('/create',(req,res)=>{
    res.render('create')
});

movieController.get('/:movieId/details',async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.findMovie(movieId).lean();
    res.render('movie/details',{movie});
});

movieController.post('/create',async (req,res)=>{
    const newMovie = req.body;

   await movieService.createMovieData(newMovie);

    res.redirect('/')

    res.end();
});

movieController.get('/search',async (req,res)=>{
    const filter = req.query;
    const movies = await movieService.getAll(filter).lean();

    res.render('search', {movies, filter});
})

export default movieController;