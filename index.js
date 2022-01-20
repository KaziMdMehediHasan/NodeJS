// console.log(global);

// console.log(__dirname);
// console.log(__filename);

// const people = require('./people');

//     console.log(people.people);
// console.log(people.a);
// console.log(people.test());

const path = require('path');
const os = require('os');
const myPath = 'C:/Users/Foxy/Desktop/Codes/LWS/NodeJS/Node Basic/index.js'

console.log(path.parse(myPath));

console.log(os.platform());