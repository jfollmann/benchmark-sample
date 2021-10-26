var { Suite } = require('benchmark');
const { onComplete, onCycle } = require('./utils/events.js');

new Suite('is_array')
  .add('Array.isArray', function () {
    return Array.isArray([])
  })
  .add('constructor.prototype === Array.prototype', function () {
    return [].constructor.prototype === Array.prototype
  })
  .add('instanceof Array', function () {
    return [] instanceof Array
  })
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run({ async: false });