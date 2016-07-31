function groupBy (list, func){
  var result = {};
  if (typeof func === "string"){
    for (i=0;i<list.length;i++){
        result[list[i]] = list[i][func];
      }
  } else {  for (i=0;i<list.length;i++){
        var functionResult = func(list[i]);
        result[list[i]] = functionResult;
    }
  }
  return result;
}

console.log(groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }));
console.log(groupBy(['one', 'two', 'three'], 'length'));
