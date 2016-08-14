function addNewValue(arr, value){
  if (arr.indexOf(value) === -1){
    arr.push(value);
  }
  return arr;
}

function union(){
  var firstArr = arguments[0];
      updatedArr = firstArr;

  for(i=1; i<arguments.length;i++){
    for(j=0;j<arguments[i].length;j++){
      updatedArr = addNewValue(updatedArr, arguments[i][j]);
    }
  }
  return updatedArr;
}

// console.log(union());

module.exports = union;
