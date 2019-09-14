var readlineSync = require('readline-sync');
const SQUARE_FEET_IN_METER = 10.7639;

var length = Number(readlineSync.question('Enter the length of the room in meters: '));
var width = Number(readlineSync.question('Enter the width of the room in meters: '));

function area(length, width) {
  let areaMeters = (length * width).toFixed(2);
  let areaFeet = (areaMeters * SQUARE_FEET_IN_METER).toFixed(2);

  console.log('The area of the room is ' + areaMeters + ' square meters (' + areaFeet + ' square feet).');
}

area(length, width);