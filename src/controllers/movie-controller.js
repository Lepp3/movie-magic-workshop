import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";



const movieController = Router();


movieController.get('/create',(req,res)=>{
    res.render('create')
});

movieController.get('/:movieId/details',async (req,res)=>{
    console.log(req.user);
    const movieId = req.params.movieId;
    const movie = await movieService.findMovieWithCasts(movieId).lean();
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
});

movieController.get('/:movieId/attach-cast', async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.findMovie(movieId).lean();
    const casts = await castService.getAll({exclude: movie.casts}).lean();

    res.render('movie/cast-attach',{movie,casts});

});

movieController.post('/:movieId/attach-cast', async(req,res)=>{
    const castId = req.body.cast;
    const movieId = req.params.movieId;
    await movieService.attachCast(movieId,castId);

    res.redirect(`/movies/${movieId}/details`);

})

export default movieController;