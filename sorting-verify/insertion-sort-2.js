var array = [3,5,2,7,8,5,6,4];

function swap(arr, m, n){
  var temp = arr[m];
      arr[m] = arr[n];
      arr[n] = temp;
  return arr;
}

function swapLeft(arr, i){
  if(arr[i]<arr[i-1]){
    swap(arr, i, i-1);
    swapLeft(arr, i-1);
  }
  return arr;
}
// console.log(swapLeft(array,7));


function insertionSort2(arr){
  var newArr = arr.slice();
  if(newArr.length<=1){
    return newArr;
  }else{
    for(var i=0; i<newArr.length; i++){
        swapLeft(newArr, i);
    }
  return newArr;
  }
}
module.exports = insertionSort2;
