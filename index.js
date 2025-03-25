//require('dotenv').config();
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/config.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';

const port = process.env.PORT || 5000;
const app = express();

dotenv.config();
connectDB();


//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
app.use('/api/user', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wether', weatherRoutes);


app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})