// const EventEmitter = require('events');

// const emitter = new EventEmitter();

const School = require('./school2');
const school = new School();

// register an event on the occurrence of the specified event

// emitter.on('bellRing', ({ period, text }) => {
//     console.log(`Hurrah! ${period} ${text}`);
// })

// step 3:
school.on('bellRing', ({ period, text }) => {
    console.log(`Hurrah! ${period} ${text}`);
})

//raise an event

// step3:

school.startSchool();

// single parameter
// setTimeout(() => {
//     emitter.emit("bellRing", 'second period ended');
// }, 2000)

// multiple parameter

// step 2:
// setTimeout(() => {
//     emitter.emit("bellRing", {
//         period: 'first',
//         text: 'has ended'
//     })
// },1000);