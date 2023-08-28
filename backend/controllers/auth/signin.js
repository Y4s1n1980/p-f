const User = require('../../models/User'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('../utils/error');

const secretKey = process.env.SECRET_KEY;

const signinController = async (req, res, next) => {
  try {
    const { email, password } = req.body; 
   

    const user = await User.findOne({ email }); 
    if (!user) {
      throw new ErrorHandler(401, 'Correo electrónico o contraseña incorrectos');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new ErrorHandler(401, 'Correo electrónico o contraseña incorrectos');
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' }); 

    res.json({ token });
  } catch (error) {
    next(error); 
  }
};

module.exports = signinController;

