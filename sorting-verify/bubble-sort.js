function bubble_sort(array){
  var newArray = array.slice();
  var swamped = false;

  do {
    swamped = false;
    for (var i=0; i<newArray.length-1; i++){


      if (newArray[i]> newArray[i+1]){
        var temp;
        temp = newArray[i];
        newArray[i] = newArray[i+1];
        newArray[i+1] = temp;
        swamped = true;
      }}}while(swamped);

      return newArray;
}

module.exports = bubble_sort;
