const User = require('../../models/User'); 
const bcrypt = require('bcrypt');
const { ErrorHandler } = require('../utils/error');

const signupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

  

    const existingUser = await User.findOne({ email }); 
    if (existingUser) {
      throw new ErrorHandler(400, 'El usuario con ese correo electrónico ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save(); 

    res.json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    next(error); 
  }
};

module.exports = signupController;
