import { Schema, model, Types} from "mongoose";


//create schema

const movieSchema = new Schema({
        name: {
                type: String,
                required: [true,'Name is required!'],
                minlength: [5,'Minimum length is five characters'],
                maxlength: 250,
                match: [/^[a-zA-Z 0-9]+$/,'Title should be alphanumeric, digits and whitespaces!'],
        },
        category: {
                type: String,
                required: [true,'Category is required!'],
                minlength: [5,'Minimum length is five characters'],
                maxlength: 250,
                match: [/^[a-zA-Z 0-9]+$/,'Category should be alphanumeric, digits and whitespaces!'],
        },
        genre: {
                type: String,
                required: [true,'Genre is required!'],
                minlength: [5,'Minimum length is five characters'],
                maxlength: 250,
                match: [/^[a-zA-Z 0-9]+$/,'Genre should be alphanumeric, digits and whitespaces!'],
        },
        director: {
                type: String,
                required: [true,'Director is required!'],
                minlength: [5,'Minimum length is five characters'],
                maxlength: 250,
                match: [/^[a-zA-Z 0-9]+$/,'Director should be alphanumeric, digits and whitespaces!'],
        },
        year: {
                type: Number,
                min: 1900,
                max: 2024,
        },
        rating: {
                type: Number,
                min: 1,
                max: 5,
        },
        description: {
                type: String,
                required: [true,'Description is required!'],
                minlength: [20,'Minimum length is twenty characters'],
                match: [/^[a-zA-Z 0-9]+$/,'Description should be alphanumeric, digits and whitespaces!'],
        },
        imageUrl: {
                type: String,
                match: /^https?:\/\//,
        },
        casts: [{
                type: Types.ObjectId,
                ref: 'Cast',
        }],
        creator: {
                type: Types.ObjectId,
                ref: 'User',
        }
})


//create model

const Movie = model('Movie', movieSchema);


//export model
export default Movie;