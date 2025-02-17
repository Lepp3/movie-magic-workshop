import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js'
import showRatingHelper from './helpers/ratingHelper.js';
import mongoose from 'mongoose';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/auth-middleware.js';

const app = express();

//db configuration

try{
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Connected Successfully');
}catch(err){
    console.log('Could not connect');
    console.error(err.message);
}


//handlebars configuration
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating: showRatingHelper,
    }
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

//express configuration
app.use('/static',express.static('src/public'));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(authMiddleware);

//setup routes
app.use(routes);



//start server
app.listen(5001, ()=> console.log('Server is listening on port http://localhost:5001'));