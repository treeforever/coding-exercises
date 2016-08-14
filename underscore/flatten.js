function multipleFlatten(item){
  var nums=[];
  var i;
  var r;
  if (typeof item === "number"){
    nums = nums.concat([item]);
    return nums;
  }else{
    for(i=0; i<item.length; i++){
      r = multipleFlatten(item[i]);
      nums = nums.concat(r);
      }
    return nums;
    }
}
// console.log(multipleFlatten([1, [2], [3, [[4]]]]));

function singleFlatten(item){
  var i, j, nums=[];
  for(i=0; i<item.length; i++) {
      if (typeof item[i] === "number"){
        nums = nums.concat([item[i]]);
      } else {
        for(j=0; j<item[i].length; j++){
          nums = nums.concat([item[i][j]]);
        }
      }
    }
  return nums;
}

function flatten(item){
  if(arguments[1] === true){
    return singleFlatten(item);
  } else if (arguments[1] === false || arguments.length === 1) {
    return multipleFlatten(item);
  } else{
    throw "Not inplemented.";
  }
}

// var a = [1, [2], [3, [[4]]]];
// console.log(flatten([[[1]]]));
// console.log(a[2][1]);

//
// var array = [1,2,3,4];
// console.log(array.last());
module.exports = flatten;
