const EventEmitter = require('events');

class School extends EventEmitter {
    startSchool() {
    console.log('School Started');

    // raise an event when bell rings
    setTimeout(() => {
    this.emit("bellRing", {
        period: 'first',
        text: 'has ended'
      })
    }, 1000);
   }
}


module.exports = School;