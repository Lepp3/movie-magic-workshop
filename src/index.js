import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.engine('hbs',handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req,res)=>{
    res.send('it works');
})


app.listen(5001, ()=> console.log('Server is listening on port http://localhost:5001'));