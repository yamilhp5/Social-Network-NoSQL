//Importing the User and Thought models from their files
const User = require('./User');
const Thought = require('./Thought');

//Exporting models as a single module for access in part of the application
module.exports = {Thought, User};