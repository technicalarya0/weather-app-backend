import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';


const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const existUser = await User.findOne({ $or: [{email}, {username}]});

        if(existUser) return res.status(400).json({message: 'User already exist'});

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashPassword});
        const savedUser = await newUser.save();

        const token = jwt.sign({id: savedUser._id, username: savedUser.username}, process.env.JWT_SECRET, {expiresIn: '1d'});
        
        res.status(201).json({token, user: {id: savedUser._id, username: savedUser.username, email: savedUser.email}});        
    } catch (err) {
        req.status(500).json({message: err.message});
    }
});

router.post('/login', async (req, res) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) res.status(400).json({message: 'User not exist'});

        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword) res.status(400).json({message: 'Invalid Password'});

        const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '1d'});

        res.json({token, user: {id: user._id, username: user.username, email: user.email}});
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;