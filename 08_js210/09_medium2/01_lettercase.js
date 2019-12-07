/*
PROBLEM
- accept string and return details about its characteristics as object
  - percentage of lowercase
  - percentage of upper case
  - percentage of neither

CLARIFICATIONS
- always round to 2?
- spaces count as neither

INPUT
- string of chars

OUTPUT
- object
  - keys: lowercase, uppercase, neigther
  - values: percentage or each
    - need to sum to 100
    - round to 2 decimal places

ALGORITHM
- assign total char count (string.length) to variable
- create object variable to hold count of lowercase, uppercase, and neither
- split string argument into array of individual chars
- iterate over each char
- use regex to match
  - if lowercase, increment lowercase object key's value by 1
  - if uppercase, increment uppercase object key's value by 1
  - if neigther, increment neigther object key's value by 1
- map values of object
  - multiply by 100 and divide by total chars * 100
  - round to 2 places
return object
*/

// function letterPercentages(str) {
//   let total = str.length;
//   let properties = {
//     lowercase: 0,
//     uppercase: 0,
//     neither:   0,
//   }

//   str.split('').forEach(function(char) {
//     if (char.match(/[a-z]/)) {
//       properties.lowercase += 1;
//     } else if (char.match(/[A-Z]/)) {
//       properties.uppercase += 1;
//     } else {
//       properties.neither += 1;
//     }
//   });

//   Object.keys(properties).forEach(function(key) {
//     properties[key] = formattedPercentage(properties[key], total);
//   });

//   console.log(properties);
// }

// function formattedPercentage(value, total) {
//   let percentage = Math.round(value * 10000 / total).toString();

//   if (percentage === '0') {
//     return '0.00';
//   } else if (percentage === '10000') {
//     return '100.00';
//   } else {
//     return percentage.substr(0, 2) + '.' + percentage.substr(2);
//   }
// }

function letterPercentages(str) {
  return {
    lowercase: ((str.match(/[a-z]/g) || []).length * 100 / str.length).toFixed(2),
    uppercase: ((str.match(/[A-Z]/g) || []).length * 100 / str.length).toFixed(2),
    neither: ((str.match(/[^a-zA-Z]/g) || []).length * 100 / str.length).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('123ssss'));