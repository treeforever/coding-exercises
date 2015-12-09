function swap(arr, m, n) {
  var temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
}

function compareSwapLeft(newArr, n){
  if(n > 0) {
    if(newArr[n]<newArr[n-1]){
      swap(newArr, n, n-1)
    }
    compareSwapLeft(newArr, n - 1);
  }
 }

function insertionSort(arr){
    var newArr = arr.slice(); //make a new copy
    for (var n=0; n<newArr.length; n++){
      compareSwapLeft(newArr, n);
    }
    return newArr;
}

module.exports = insertionSort;
