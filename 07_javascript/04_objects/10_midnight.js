// function afterMidnight(time) {
//   let midnight = new Date('01-01-1900 00:00:00');
//   time = new Date('01-01-1900 ' + time);
//   let deltaMinutes = (time.getTime() - midnight.getTime()) / 1000 / 60;

//   return deltaMinutes;
// }

// function beforeMidnight(time) {
//   let midnight = new Date('01-01-1900 00:00:00');
//   time = new Date('01-01-1900 ' + time);
//   let deltaMinutes = (1439 - ((time.getTime() - midnight.getTime()) / 1000 / 60)) % 1439;

//   return deltaMinutes;
// }

const DATE_PART = '01-01-1900';
const MILLISECOND_IN_MINUTE = 60000;
const MINUTES_IN_DAY = 1439;

function afterMidnight(timeStr) {
  let midnight = new Date(DATE_PART + ' 00:00');
  let currentTime = new Date(DATE_PART + ' ' + timeStr);
  let deltaMilliseconds = currentTime.getTime() - midnight.getTime();
  let deltaMinutes = deltaMilliseconds / MILLISECOND_IN_MINUTE;

  return deltaMinutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = (MINUTES_IN_DAY - afterMidnight(timeStr)) % MINUTES_IN_DAY;

  return deltaMinutes;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686