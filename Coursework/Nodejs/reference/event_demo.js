const EventEmitter = require('events');

// Creates a class
class MyEmitter extends EventEmitter { }

// Initializes object
const myEmitter = new MyEmitter():

// Event listener
const myEmitter.on('event', () => console.log('Event fired')):

// Initializing event
myEmitter.emit('event');
