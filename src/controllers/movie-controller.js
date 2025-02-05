import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";



const movieController = Router();


movieController.get('/create',(req,res)=>{
    res.render('create')
});

movieController.get('/:movieId/details',async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.findMovieWithCasts(movieId).lean();
    const isCreator = movie.creator && movie.creator?.toString() === req.user.id;
    

    res.render('movie/details',{movie, isCreator});
});

movieController.post('/create',async (req,res)=>{
    const newMovie = req.body;
    const userId =  req.user?.id;
    
    await movieService.createMovieData(newMovie,userId);
   
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

});


movieController.get('/:movieId/delete', async(req,res)=>{
    const movieId = req.params.movieId;

    const movie = await movieService.findMovie(movieId);

    if(!movie.creator?.equals(req.user?.id)){
        return res.redirect('/404');
    };

    await movieService.delete(movieId);
    res.redirect('/')
    
});

movieController.get('/:movieId/edit', async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.findMovie(movieId).lean();
    res.render('movie/edit', {movie});
})

export default movieController;