var jsc = require('jsverify'),
    _ = require('lodash'),
    range = require('./range');

describe('range', function () {
  var smallInt = jsc.integer(-99999, 99999);
  jsc.property("correct", smallInt, smallInt, smallInt,
  function (start, stop, step) {
     var expected = _.range(start, stop, step);
     var actual = range(start, stop, step);
     return _.isEqual(expected, actual);
  });
});
