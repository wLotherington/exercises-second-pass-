const SECS_IN_MIN = 60;
const SECS_IN_DEG = SECS_IN_MIN * 60;

function dms(degreesFloat) {
  degreesFloat = validDegree(degreesFloat);

  let seconds = Math.round(degreesFloat * SECS_IN_DEG);
  
  let degrees = Math.floor(seconds / SECS_IN_DEG);
  seconds -= degrees * SECS_IN_DEG;
  
  let minutes = Math.floor(seconds / SECS_IN_MIN);
  seconds -= minutes * SECS_IN_MIN;

  return `${degrees}˚${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(n) {
  strN = String(n);

  return strN.length === 1 ? '0' + strN : strN;
}

function validDegree(degreesFloat) {
  if (degreesFloat > 360) {
    return degreesFloat % 360;
  } else if (degreesFloat < 0) {
    while (degreesFloat < 0) {
      degreesFloat += 360;
    }

    return degreesFloat;
  }
}

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"