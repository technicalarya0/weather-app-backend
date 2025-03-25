import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.status(401).json({message: 'Access Denied'});

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return req.status(403).json({message: 'Token is not valid'});

        req.user = user;
        next();
    });
};

export default authToken;