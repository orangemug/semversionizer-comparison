var Benchmark = require('benchmark');
var compare   = require('../lib/semver');

var suite = new Benchmark.Suite;

suite.add('Semver#compare major.minor.patch', function() {
  compare("3.14.26", "3.14.20");
});

suite.add('Semver#compare major.minor.patch.prerelease.build', function() {
  compare("3.14.26-alpha+2136", "3.14.26-alpha+2137");
});

// add listeners
suite.on('cycle', function(event) {
  console.log(String(event.target));
});

// run async
suite.run({'async': true});
