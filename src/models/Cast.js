import { Schema, model } from "mongoose";


const castSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is required!'],
        minlength: [5,'Name should be at least 5 characters long'],
        match: [/^[a-zA-Z 0-9]+$/,'Name should be alphanumeric, digits and whitespaces!'],
    },
    age: {
        type: Number,
        required: [true,'Age is required!'],
        min: 0,
        max: 120
    },
    born: {
        type: String,
        required: [true,'Born is required!'],
        minlength: 10,
        match: /^[a-zA-Z 0-9]+$/,
    },
    imageUrl: {
        type: String,
        match: /^https?:\/\//,
},
});


const Cast = model('Cast', castSchema);


export default Cast;