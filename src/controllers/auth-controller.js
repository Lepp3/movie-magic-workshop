import {Router} from 'express';
import authService from '../services/authService.js';
import { getErrorMessage } from '../utils/error-utils.js';


const authController = Router();

authController.get('/register', (req,res)=>{
    res.render('auth/register');
});

authController.post('/register',async (req,res)=>{
    const userData = req.body;
    try{
        await authService.register(userData);
    }catch(err){
       const error = (getErrorMessage(err));
        return res.render('auth/register',{error})
    }
    
    res.redirect('/auth/login');
});


authController.get('/login', (req,res)=>{
    res.render('auth/login')
});

authController.post('/login', async(req,res)=>{
    const {email,password} = req.body;

    try{
        const token = await authService.login(email,password);
        res.cookie('auth', token);
        res.redirect('/');
    }catch(err){
        res.render('auth/login',{error: getErrorMessage(err)});
    };
    

    
});


authController.get('/logout', (req,res)=>{
    res.clearCookie('auth');

    res.redirect('/');
})



export default authController;