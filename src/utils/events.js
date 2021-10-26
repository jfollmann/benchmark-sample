const [onComplete, onCycle] = [
  function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  },
  function (event) {
    console.log(String(event.target))
  }
];

module.exports = { onComplete, onCycle }