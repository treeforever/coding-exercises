function isFalsy(a){
  if(a === false || a === undefined || a === 0 || a === null || ((typeof a !== "string") && isNaN(a)) || a === ""
){
  return a;
  }
}

function reduceOneElement(array, falsyValue){
  var newArr = [];
  for(j=0; j<array.length;j++){
    if(array[j] !== falsyValue){
        newArr.push(array[j]);
    }
  }
  return newArr;
}

function compact(array){
  var updatedArr = array;
  for(i=0;i<array.length;i++){
    falsyValue = isFalsy(array[i]);
    updatedArr = reduceOneElement(updatedArr,falsyValue);
  }
  return updatedArr;
}

module.exports = compact;
