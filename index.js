let BoardTest = require('./BoardTest');
let AITest = require('./AITest');
let RefereeTest = require('./RefereeTest');

let boardTest = new BoardTest()
boardTest.test();

let aiTest = new AITest()
aiTest.test();

let refereeTest = new RefereeTest()
refereeTest.test();

console.log('All tests passed!');
