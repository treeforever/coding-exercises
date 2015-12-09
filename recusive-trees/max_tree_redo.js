//given an array that contains nested number structure

  var numberTree = [1, 4, [5, 8, 6], [[11, 12, [33, [55]]],6, 4], 10];


  //write a function that traverses the nested array of numbers and return the maximum number

  //findMaxNumber is a function that renders the biggest number in a single nested array
  function findMaxNumber (array){

    biggerNumber = array[0];
    for (var x=1; x < array.length; x++){
      if (array[x]> biggerNumber){
        biggerNumber = array[x]
      }
    }
    return biggerNumber;
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
    }
  }

function findMaxinTree(array){
var n = flatten(array);
m = findMaxNumber(n);
return m;}

findMaxinTree(numberTree);




//////////////////////////////////////////////////////////////





//tip 2: you might need recursion
//https://www.codecademy.com/courses/javascript-lesson-205/0/1
