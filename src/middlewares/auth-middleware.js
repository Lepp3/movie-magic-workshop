import jwt from 'jsonwebtoken';


export const authMiddleware = (req,res,next) => {

    const token = req.cookies['auth']

    if(!token){

        return next();
    };

    try{
        const decodedToken = jwt.verify(token,process.env.SECRET);
        

        req.user = decodedToken;



        next();
    }catch(err){
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }


}