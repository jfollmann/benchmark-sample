var { Suite } = require('benchmark');
const { onComplete, onCycle } = require('./utils/events.js');

// -------- String test Suite -------- 
new Suite('string_test')
  .add('RegExp#test', function () {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', function () {
    'Hello World!'.indexOf('o') > -1;
  })
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run({ 'async': true });

// // -------- Last String Index -------- 
// new Suite('last_string_index')
//   .add('endsWith', function () {
//     return str.endsWith('$')
//   })
//   .add('slice', function () {
//     return str.slice(-1) === '$'
//   })
//   .add('indexed', function () {
//     return str[str.length - 1] === '$'
//   })
//   .on('start', function () {
//     str = Math.floor(Math.random() * 1000).toString(10)
//   })
//   .on('cycle', onCycle)
//   .on('complete', onComplete)
//   .run({ async: false })