function smallerNumber(a,b){
  if (a === undefined){
    return b;
  } else if(b === undefined){
    return a;
  } else if(a<b){
    return a;
  } else{
    return b;
  }
}
// console.log (smallerNumber (2, 10));


function biggerNumber2(a, b){
  return (a > b ? a : b);
}

function mergeTwoArray(arr1, arr2){

    var n=0;
    var m=0;
    var mergedArray = [];
    var r;

    for (var i=0; i<arr1.length + arr2.length; i++){

      if(n === arr1.length){
        r = smallerNumber( arr2[m], arr2[m+1]);
        mergedArray[i] = r;
        m = m+1;
      } else if(m === arr2.length){
        r = smallerNumber( arr1[n], arr1[n+1]);
        mergedArray[i] = r;
        n = n+1;
      } else {
        r = smallerNumber(arr1[n], arr2[m]);
        mergedArray[i]= r;

        if(arr1[n]<arr2[m]){
          n = n+1;
        }else{
          m = m+1;
        }
      }
    }
    return mergedArray;
}

function sliceHalf(arr){
  var h = Math.floor((arr.length)/2);
  var array1 = arr.slice(0, h);
  var array2 = arr.slice(h, arr.length);

  return [array1, array2];
}

function mergeSort(array){
  var array1 = sliceHalf(array)[0];
  var array2 = sliceHalf(array)[1];

  if (array1.length ===0){
    return array2;
  } else if(array2.length ===0){
    return array1;
  } else{
    var arraySorted1 = mergeSort(array1);
    var arraySorted2 = mergeSort(array2);

    return mergeTwoArray(arraySorted1, arraySorted2);
  }
}

module.exports = mergeSort;
