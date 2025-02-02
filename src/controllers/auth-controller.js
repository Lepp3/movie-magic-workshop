import {Router} from 'express';

const authController = Router();

authController.get('/register', (req,res)=>{
    res.render('auth/register');
});

authController.post('/register',async (req,res)=>{
    const newUser = req.body;
    console.log(newUser);
    res.end();
})



export default authController;