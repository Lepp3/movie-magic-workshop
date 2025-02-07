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
        match: [/^\w+$/,'Forbidden character used!'],
        minlength: [6,'Password should be atleast 6 characters!']
    }
});


//virtual property approach for repeat password missmatch
// userSchema.virtual('rePassword')
// .set(function(rePassword){
//     if(rePassword !== this.password){
//         throw new Error('Password missmatch');
//     }
// });

userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10);
})


const User = model('User', userSchema);

export default User;