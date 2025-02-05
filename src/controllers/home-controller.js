import express from 'express';
import movieService from '../services/movieService.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    //second solution is to use .lean on query to get plain object
    const movies = await movieService.getAll().lean();


    //first solution is to convert documents to objects
    // const plainMovies = movies.map(m=>m.toObject());

    //third solution is the use allowProtoPropertiesByDefault runtimeOption in handlebars
    res.render('home', {movies});
});

router.get('/about',(req,res)=>{
    res.render('about', {pageTitle: 'About'});
}
)

export default router;