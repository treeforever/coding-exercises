function rangeStartStopStep(start, stop, step){
  var arr = [];
  if(arguments[2] < 0){
    for(i=start; i>stop; i=i+step){
      arr.push(i);
    }
    return arr;
  } else{
    for(i=start; i<stop; i=i+step){
      arr.push(i);
      }
    return arr;
  }
}

function rangeStartStop(start, stop){
  return rangeStartStopStep(start, stop, 1);
}

function rangeStop(stop){
  return rangeStartStopStep(0, stop, 1);
}

function ultimateRange(){
  if(arguments.length === 3){
    return rangeStartStopStep(arguments[0], arguments[1], arguments[2]);
  } else if(arguments.length === 2){
    return rangeStartStop(arguments[0], arguments[1]);
  } else{
    return rangeStop(arguments[0]);
  }
}

console.log(ultimateRange(4, -2, -1));

module.exports = rangeStartStopStep;
module.exports = rangeStartStop;
module.exports = rangeStop;
