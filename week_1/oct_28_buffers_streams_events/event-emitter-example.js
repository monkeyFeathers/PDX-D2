var events = require('events');
var eventEmitter = new events.EventEmitter();

function doSomething(e){
  console.log('We just did something.');
  console.log(e)
}

eventEmitter.on('custom-event', function(e){
  console.log(e);
});

eventEmitter.emit('custom-event');
