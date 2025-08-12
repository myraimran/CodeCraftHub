const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }
    try {
        const verified = jwt.verify(token, 'your_jwt_secret'); // Replace with your secret
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send({ error: 'Invalid token.' });
    }
};

module.exports = authMiddleware;