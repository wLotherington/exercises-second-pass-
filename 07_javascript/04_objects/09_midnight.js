function timeOfDay(deltaMinutes) {
  let today = new Date(Date.now());
  today.setHours(0,0,0);
  today.setMinutes(deltaMinutes);
  let hours = padWithZeroes(today.getHours());
  let minutes = padWithZeroes(today.getMinutes());

  return `${hours}:${minutes}`;
}

function padWithZeroes(time) {
  time = String(time);

  if (time.length === 1) {
    return '0' + time;
  } else {
    return time;
  }
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"