// require takes one argument, the name of the module that you would like to require
// it returns the exported object of the required file
// the best practice for loading an object from a require statement is to assign to a const variable
const logger = require('./logger');

logger('My logged message!');