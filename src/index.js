import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.send('it works');
})


app.listen(5001, ()=> console.log('Server is listening on port http://localhost:5001'));