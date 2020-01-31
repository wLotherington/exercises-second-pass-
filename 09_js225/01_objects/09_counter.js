function makeCounterLogger(startNum) {
  return function(endNum) {
    if (startNum <= endNum) {
      for (let i = startNum; i <= endNum; i++) {
        console.log(i);
      }
    } else {
      for (let i = startNum; i >= endNum; i--) {
        console.log(i);
      }
    }
  };
}


var countlog = makeCounterLogger(5);
countlog(8);
console.log('\n')
countlog(2);