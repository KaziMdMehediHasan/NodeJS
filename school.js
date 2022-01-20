const EventEmitter = require('events');

const emitter = new EventEmitter();

function startPeriod() {
    console.log('Class started');

    //raise event when bell rings

 setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'second',
        text: 'period ended'
    });
  },2000)
}

module.exports = startPeriod;