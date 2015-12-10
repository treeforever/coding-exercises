function rangeStartStopStep(start, stop, step){
  var arr = [];
  for(i=start; i<stop; i=i+step){
    arr.push(i);
    }
  return arr;
}

function rangeStartStop(start, stop){
  return rangeStartStopStep(start, stop, 1);
}

function rangeStop(stop){
  return rangeStartStopStep(0, stop, 1);
}
