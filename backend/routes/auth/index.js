const express = require('express');
const router = express.Router();

const signupRoutes = require('./signup');
const signinRoutes = require('./signin');
const signoutRoutes = require('./signout');

router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);
router.use('/signout', signoutRoutes);

module.exports = router;
