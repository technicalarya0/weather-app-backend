import express from 'express';
import { getWeatherData, getHistory } from '../controllers/weather.controllers.js';
import authToken from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/;location', authToken, getWeatherData);

router.get('/history', authToken, getHistory);

export default router;