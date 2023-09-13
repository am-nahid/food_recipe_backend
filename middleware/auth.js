const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")

dotenv.config()

const secretKey = process.env.JWT_SECRET_KEY 

// console.log(process.env.JWT_SECRET_KEY);

const auth = (req, res, next) => {
    const data = req.headers['authorization'];

    if (!data) {
        return res.status(401).json({ msg: 'Missing authorization header' });
    }

    const token = data.split(' ')[1];

    try {
        const verify = jwt.verify(token, secretKey);

        if (verify) {
           
            return next();
        } else {
            
            return res.status(401).send({ msg: 'User not authorized' });
        }
    } catch (err) {
        // Token verification threw an error
        console.error('Error verifying token:', err);
        return res.status(401).send({ msg: 'User not authorized' });
    }
};

module.exports = auth;
