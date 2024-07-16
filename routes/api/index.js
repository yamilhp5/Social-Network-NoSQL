//Create a router instance
const router = require('express').Router();
//Import user and thoughts routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router; 
