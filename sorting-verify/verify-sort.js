var jsc = require('jsverify'),
    _ = require('lodash'),
    bubbleSort = require('./bubble-sort'),
    mergeSort = require('./merge-sort'),
    insertionSort = require('./insertion-sort'),
    superSort = require('./super-awesome-sort.js');

[bubbleSort, mergeSort, insertionSort].forEach(function(sortFn) {
  describe(sortFn.name, function () {
    jsc.property("correct", "array nat", function (arr) {
      return _.isEqual(sortFn(arr).slice(), arr.sort(function(a, b){return a-b}));
    });

    jsc.property("idempotent", "array nat", function (arr) {
      return _.isEqual(sortFn(sortFn(arr)).slice(), sortFn(arr));
    });
  });
});
