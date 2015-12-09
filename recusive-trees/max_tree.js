//given an array that contains nested number structure

var numberTree = [1, 4, [5, 8, 6], [[11, 12, [33, [55]]],6, 4], 10];

//write a function that traverses the nested array of numbers and return the maximum number

//findMaxNumber is a function that renders the biggest number in a single nested array
function findMaxNumber (array_of_number){
  var array = array_of_number;
  biggerNumber = array[0];
  for (var x=1; x < array.length; x++){
    if (array[x]> biggerNumber){
      biggerNumber = array[x];
    }
  }
  return biggerNumber;
}


function findMaxInTree(tree) {
  var stack = [];
  for (var i=0; i < tree.length; i++){
    if (typeof tree[i] === 'number'){
      stack[i] = tree[i];
    } else if (tree[i] instanceof Array){
      stack[i] = findMaxInTree(tree[i]);
    }
  }
  var result =  findMaxNumber(stack);
  return result;
}

function findMaxTree2(tree) {
  if(typeof tree === 'number') {
    return tree;
  }
  else if (tree instanceof Array) {
    var stack = [];
    for(var i = 0; i < tree.length; i++) {
      stack[i] = findMaxTree2(tree[i]);
    }
    return findMaxNumber(stack);
  }
}

function findMaxTree3(tree) {
  if(typeof tree === 'number') {
    return tree;
  }
  else if (tree instanceof Array) {
    var stack = tree.map(findMaxTree3);
    return findMaxNumber(stack);
  }
}


//tip 1: how to detect if variable x is number or array:

// x instanceof Array
// typeof x === 'number'
// //e.g.
//
// var a = [1, 2, 3], b = 333;
//
// typeof a === 'number'; //false
// a instanceof Array; //true
//
// typeof b === 'number'; //true
// b instanceof Array //false

//tip 2: you might need recursion
//https://www.codecademy.com/courses/javascript-lesson-205/0/1
