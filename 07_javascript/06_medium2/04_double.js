function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

function makeDoubler(caller) {
  let makeDouble = function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }

  return makeDouble;
}

doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

var doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.



/// SOLUTION
// function makeDoubler(caller) {
//   return function (number) {
//     console.log('This function was called by ' + caller + '.');
//     return number + number;
//   };
// }

// var doubler = makeDoubler('Victor');
// doubler(5);                             // returns 10
// // logs:
// // This function was called by Victor.