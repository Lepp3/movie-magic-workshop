import {Router} from 'express';

const router = Router();


router.get('/create',(req,res)=>{
    res.render('cast/create');
});

router.post('/create', (req,res)=>{
    
})


export default router;