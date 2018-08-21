const {EventEmitter} = require('events');

class Logger { // extends EventEmitter
  constructor() {
    this.emitter = new EventEmitter();
  }
  
  log(message) {
    console.log(message);
    this.emitter.emit('messageLogged', {
      message,
      time: Date.now()
    });
  }

  onLog(listener) {
    this.emitter.on('messageLogged', listener);
  }
  
}

module.exports = Logger;