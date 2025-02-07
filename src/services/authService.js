import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const secret = process.env.SECRET;
export default {
    register(userData){
        if(userData.password !== userData.rePassword){
            throw new Error('Passwords missmatch!');
        }

        //validate if email exists
        const userCount = User.countDocuments({email: userData.email});
        if(userCount > 0){
            throw new Error('Email already exists');
        }

        return User.create(userData);
    },
    async login(email,password){
        let isValid = false;
        const user = await User.findOne({email});

        if(!user){
            throw new Error('invalid email or password');
        };

        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            throw new Error('invalid email or password');
        };
        const payload = {
            id: user._id,
            email: user.email
        }
        const token = jwt.sign(payload,secret,{expiresIn: '2h'});

        return token

    }
}