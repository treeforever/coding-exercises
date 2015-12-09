var numberTree = [1, 4, [5, 8, 6], [[11, 12, [33, [55]]],6, 4], 10];


function flatten(array){

  var nums=[];
  var i;
  var r;

  if (typeof array === "number"){
    nums = nums.concat(array);
    return nums;

  }else{
    for (i=0; i<array.length; i++){
      r = flatten(array[i]);
      nums = nums.concat(r);
      }
    return nums;
    };
  }

function sum_tree (array){
  var sum;
  var line_array;

  line_array = flatten(array);
  sum = line_array.reduce(function(a, b){
    return a + b;
  });
  return sum;
}