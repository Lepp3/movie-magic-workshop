import express from 'express';
import movies from '../movies.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.render('home', {movies});
    console.log(movies);
});

router.get('/about',(req,res)=>{
    res.render('about');
}
)

export default router;