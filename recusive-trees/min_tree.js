var numberTree = [1, 4, [5, 8, 6], [[11, 12, [33, [55]]],6, 4], 10];
  //write a function that traverses the nested array of numbers and return the maximum number

  //findMaxNumber is a function that renders the biggest number in a single nested array

function findMinNumber (array){
    smallerNumber = array[0];

    for (var x=1; x < array.length; x++){
      if (array[x]< smallerNumber){
        smallerNumber = array[x]
      }
    }
    return smallerNumber;
  }



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

function findMininTree(array){
var n = flatten(array);
m = findMinNumber(n);
return m;}

findMininTree(numberTree);