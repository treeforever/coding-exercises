// var testList = [12,34,51,4,7,-1,809,1111,22,45,6666,77,88,123,653,254,798];
//     testList2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle(list){
  if (arguments.length>0){
    var multiplier = list.length;
        shuffledList = list;

    for (i=0;i<list.length;i++){
      randomPosition = Math.floor(Math.random() * (multiplier - i ));
      test = shuffledList[shuffledList.length-i-1];
      shuffledList[shuffledList.length-i-1] = shuffledList[randomPosition];
      shuffledList[randomPosition] = test;
    }

    return shuffledList;
  } else {
    return [];
  }
}

function shuffle2(list){
  if (arguments.length>0){
    var multiplier = list.length;
        listCopy = list;
        shuffledList = [];

    for (i=0;i<list.length;i++){
      randomPosition = Math.floor(Math.random() * multiplier);

      while(listCopy[randomPosition] === undefined){
        randomPosition = Math.floor(Math.random() * multiplier);
      }
      shuffledList[i] = listCopy[randomPosition];
      delete listCopy[randomPosition];
    }
    return shuffledList;
  } else {
    return [];
  }
}

function remainderFormNewArr (position, arr){
  var newArr = [];
  for (i=0;i<position;i++){
    newArr[i] = arr[i];
  }

  for (j=position+1;j<arr.length;j++){
    newArr[j-1] = arr[j];
  }

  return newArr;
}


function shuffle3(list){
  if (arguments.length>0){
    var updatedList = list;
        shuffledList = [];

    for (a=0;a<list.length;a++){
      var multiplier = updatedList.length;
      randomPosition = Math.floor(Math.random() * multiplier);
      shuffledList[a] = updatedList[randomPosition];
      updatedList = remainderFormNewArr(randomPosition, updatedList);
    }

    return shuffledList;
  } else {
    return [];
  }

}


// console.log(shuffle3(testList2));
