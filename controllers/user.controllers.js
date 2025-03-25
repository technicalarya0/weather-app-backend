import User from '../models/user.models.js';

export const getProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if(!user) return res.status(400).json({message: 'User not found'});

        res.json(user);
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const postFavorites = async (req, res) => {
    try {
        const {location} = req.body;
        const user = await User.findById(req.user.id);

        if(!user) return res.status(400).json({message: 'User not found'});

        if(!user.favorites.includes(location)){
            user.favorites.push(location);
            await user.save();
        }

        res.json({favorites: user.favorites});
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const deleteFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(400).json({message: 'User not found'});

        user.favorites = user.favorites.filter(fav => fav != req.params.location);
        await user.save();

        res.json({favorites: user.favorites});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};