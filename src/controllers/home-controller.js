import express from 'express';
import movieService from '../services/movieService.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    const movies = await movieService.getAll().lean();
    res.render('home', {movies});
});

router.get('/about',(req,res)=>{
    res.render('about');
}
)

export default router;