function intersection(){
  arrOfCommonElement = [];
  for (i=0; i<arguments[0].length; i++){
    var a=1;
    //examine if every array has this element; if not, while loop will be terminated.
    while(a < arguments.length && arguments[a].indexOf(arguments[0][i]) > -1){
      a = a + 1;
    }
    // check if the last argument passed while loop; yes means this element is present in every argument.
    if (a === arguments.length){
      arrOfCommonElement.push(arguments[0][i]);
    } else{
      arrOfCommonElement.push();
    }

  }
  return arrOfCommonElement;
}

console.log(intersection());

module.exports = intersection;
