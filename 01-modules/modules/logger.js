// (function (exports, require, module, __filename, __dirname){
let url = 'http://logger.io/log';

function log(message) {
  // send an http request
  console.log(message);
}

module.exports = log
// });