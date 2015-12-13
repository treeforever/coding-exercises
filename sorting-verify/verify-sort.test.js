var jsc = require('jsverify'),
    _ = require('lodash'),
    bubbleSort = require('./bubble-sort'),
    mergeSort = require('./merge-sort'),
    insertionSort = require('./insertion-sort'),
    insertionSort2 = require('./insertion-sort-2');

[bubbleSort, mergeSort, insertionSort, insertionSort2]
  .forEach(function(sortFn) {
  describe(sortFn.name, function () {
    jsc.property("correct", "array integer", function (arr) {
      return _.isEqual(sortFn(arr).slice(), arr.sort(function(a, b){return a-b;}));
    });

    jsc.property("idempotent", "array integer", function (arr) {
      return _.isEqual(sortFn(sortFn(arr)).slice(), sortFn(arr));
    });
  });
});
