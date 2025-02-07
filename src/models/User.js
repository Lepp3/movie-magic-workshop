import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        minlength: 10
    },
    password:{
        type: String,
        match: /^\w+$/,
        minlength: 6,
    }
});

userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10);
})


const User = model('User', userSchema);

export default User;