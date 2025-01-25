import { Schema, model, Types} from "mongoose";


//create schema

const movieSchema = new Schema({
        name: String,
        category: String,
        genre: String,
        director: String,
        year: Number,
        rating: Number,
        description: String,
        imageUrl: String,
        casts: [{
                type: Types.ObjectId,
                ref: 'Cast',
        }],
})


//create model

const Movie = model('Movie', movieSchema);


//export model
export default Movie;