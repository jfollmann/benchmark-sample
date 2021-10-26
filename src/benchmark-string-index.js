var { Suite } = require('benchmark');
const { onComplete, onCycle } = require('./utils/events.js');

new Suite('last_string_index')
  .add('endsWith', function () {
    return str.endsWith('$')
  })
  .add('slice', function () {
    return str.slice(-1) === '$'
  })
  .add('indexed', function () {
    return str[str.length - 1] === '$'
  })
  .on('start', function () {
    str = Math.floor(Math.random() * 1000).toString(10)
  })
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run({ async: false })