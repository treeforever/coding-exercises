var jsc = require('jsverify'),
    _ = require('underscore'),
    range = require('./range'),
    compact = require('./compact'),
    flatten = require('./flatten'),
    rest = require('./rest'),
    union = require('./union'),
    without = require('./without');

var smallInt = jsc.integer(-99999, 99999);

describe('range', function () {
  jsc.property("correct", smallInt, smallInt, smallInt,
  function (start, stop, step) {
     var expected = _.range(start, stop, step);
     var actual = range(start, stop, step);
     return _.isEqual(expected, actual);
  });
});

describe('compact', function() {
  jsc.property("correct",
    jsc.array(jsc.oneof(
      [jsc.constant(0),
       jsc.constant(null),
       jsc.constant(1),
       jsc.constant("false"),
       jsc.constant("dsadsadadsa"),
       jsc.constant(undefined),
       jsc.constant("")])),
  function (arr) {
    var testData = arr;
     var expected = _.compact(arr);
     var actual = compact(arr);
     return _.isEqual(expected, actual);
  });
});

describe('flatten', function() {
  function generateNestedArray(level) {
    if(!level) { level = 0; }
    var size = Math.floor(10 * Math.random());
    var c;
    var arr = [];
    for(var i = 0; i < size; i++) {
      arr.push(level < 4 && Math.random() < 0.3 ? generateNestedArray(level + 1) : Math.floor((20 * Math.random())));
    }
    return arr;
  }

  [true, false].forEach(function(shallow) {
    describe('shallow = ' + shallow, function() {
      jsc.property("correct", "nat",
      function () {
        var arr = [generateNestedArray()];
         var expected = _.flatten(arr, shallow);
         var actual = flatten(arr, shallow);
         var r = _.isEqual(expected, actual);
         if(!r) {
           console.log('Counterexample: ', JSON.stringify(arr));
           console.log('Expected: ', JSON.stringify(expected));
           console.log('Actual: ', JSON.stringify(actual));
         }
         return r;
      });
    })
  });
});

describe('rest', function() {
  jsc.property('correct', '(array nat)', jsc.integer(0, 10), function(arr, idx) {
    var expected = _.rest(arr, idx);
    var actual = _.rest(arr, idx);
    return _.isEqual(expected, actual);
  });
});

describe('union', function() {
  jsc.property('correct', jsc.array(jsc.array(jsc.nat())), function(arrArr) {
    var expected = _.union.apply(null, arrArr);
    var actual = union.apply(null, arrArr);
    return _.isEqual(expected, actual);
  });
});

describe('without', function() {
  jsc.property('correct', jsc.array(jsc.integer(-5, 5)), jsc.array(jsc.integer(-5, 5)),
   function(arr, withouts) {
     var params = [arr].concat(withouts);
     var expected = _.without.apply(null, params);
     var actual = without.apply(null, params);
     return _.isEqual(expected, actual);
   });
});
