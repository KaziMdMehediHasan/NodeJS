const EventEmitter = require('events');

const emitter = new EventEmitter();

const startPeriod = require('./school');

//register a listener for bellRing event

emitter.on('bellRing', ({ period , text}) =>{
    console.log(`We need to Run because ${period} ${text}!`);
})
startPeriod();
//raise an event
// setTimeout(() => {
//     emitter.emit('bellRing','second period ended');
// },2000)
// setTimeout(() => {
//     emitter.emit('bellRing', {
//         period: 'second',
//         text: 'period ended'
//     });
// },2000)

// emitter.emit('bellRing');

//order of writing the code is important