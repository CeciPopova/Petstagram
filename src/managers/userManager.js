const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const SECRET = 'c461df05-d34d-46d9-950d-6fa2ec41bc6b';

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid user or password!');
    }
  
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid user or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d'});
    
    return token;
};

exports.register = async (userData) => {
    const user = await User.findOne({username: userData.username});
    if (user) {
        throw new Error('Username already exists!')
    }

    return User.create(userData);
};