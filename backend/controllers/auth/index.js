const signupController = require('./signup');
const signinController = require('./signin');
const signoutController = require('./signout');
const errors = require('../../misc/errors');

module.exports = {
  signupController,
  signinController,
  signoutController,
  handleErrors: (res, errorKey) => {
    const someError = errors[errorKey];
    res.status(someError.statusCode).json({ error: someError.error.message });
  },
};
