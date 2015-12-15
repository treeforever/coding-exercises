function remove(arr, itemToRemove){
  function notEqualItem(value){
    return value !== itemToRemove;
  }

  var updatedArr = arr.filter(notEqualItem);
  return updatedArr;
}


function without(){
  var originalArr = arguments[0];
  updatedArr = originalArr;

  for(i=1; i<arguments.length; i++){
    itemToRemove = arguments[i];
    updatedArr = remove(updatedArr, itemToRemove);
  }
  return updatedArr;
}

// console.log(without([1, 2, 1, 0, 3, 1, 4], 0, 1));

//////////////////////////////////////////////////////////

function reduceOneElement(updatedArr, elementToRemove){
  var newArr = [];
  for(j=0; j<updatedArr.length;j++){
    if(updatedArr[j] !== elementToRemove){
        newArr.push(updatedArr[j]);
    }
  }
  return newArr;
}

function without2(){
  var originalArr = arguments[0];
  var updatedArr = originalArr;

  for(i=1; i<arguments.length; i++){
    var elementToRemove = arguments[i];
    updatedArr = reduceOneElement(updatedArr, elementToRemove);
  }
  return updatedArr;
}

// console.log(without2([1, 2, 1, 0, 3, 1, 4],0,1));
