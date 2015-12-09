function leftMoving(newArr, n){
   if(newArr[n]<newArr[n-1]){
     var temp = newArr[n-1];
     newArr[n-1] = newArr[n];
     newArr[n] = temp;

     do {
       n = n-1;
       leftMoving(newArr, n);
     } while (n>1);

   }
   return newArr;
 }

function insertionSort(arr){
  var sortedArr = [];

  if (arr.length <= 1){
    return arr;
  } else{
      var newArr = arr;
      for (var n=0; n<newArr.length; n++){
        sortedArr = leftMoving(newArr, n);
      }
      return sortedArr;
    }

}

module.exports = insertionSort;
