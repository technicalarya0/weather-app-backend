import express from 'express';
import authToken from '../middleware/auth.middleware.js';
import { getProfile, postFavorites, deleteFavorites } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/profile', authToken, getProfile);

router.post('/favorites', authToken, postFavorites);

router.delete('/favorites/:location', authToken, deleteFavorites);

export default router;