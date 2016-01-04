var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

function pluck(arrOfObjects, propertyName){
  var arrOfValue = [];
  for (i=0;i<arrOfObjects.length;i++){
    var value  = arrOfObjects[i][propertyName];
    arrOfValue[i] = value;
  }
  return arrOfValue;
}

// console.log(pluck(stooges, 'name'));
