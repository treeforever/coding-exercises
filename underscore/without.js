function removeAll(arr, itemToRemove){
  function notEqualItem(value){
    return value !== itemToRemove;
  }
  var filtered = arr.filter(notEqualItem);
  return filtered;
}

function without(){
  var originalArr = arguments[0];
  var updatedArray = originalArr;

  for(i=1; i<arguments.length; i++){
      var a  = arguments[i];
      updatedArray = removeAll(updatedArray, a);
  }
  return updatedArray;
}

console.log(without([1, 2, 1, 0, 3, 1, 4], 0, 1));
