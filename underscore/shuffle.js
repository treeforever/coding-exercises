var testList = [12,34,51,4,7,-1,809,1111,22,45,6666,77,88,123,653,254,798];


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

console.log(shuffle(testList));
