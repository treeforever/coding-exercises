function printRemainingElements(arr, index){
  var remainerArr = [];
  for(i=index;i<arr.length;i++){
    remainerArr.push(arr[i]);
  }
  return remainerArr;
}

function rest (array, index){
  if(arguments.length === 1){
    return printRemainingElements(array, 1);
  } else {
    return printRemainingElements(array, index);
  }
}

// console.log(rest([5,4,-3,2,1,7,2],6));
