// This is a notification that something has happened

// This is a class that is returned from the events module
const {EventEmitter} = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', (e) => {
  console.log("Listener called: ", e);
});

emitter.emit('messageLogged', {
  message: "Message 1"
});
emitter.emit('messageLogged', 'message 2');
emitter.emit('messageLogged', 'message 3');