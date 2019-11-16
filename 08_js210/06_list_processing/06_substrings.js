function substringsAtStart(str) {
  return str.split('').map((_, i) => str.substring(0, i + 1));
}

// function substrings(str) {
//   let substrings = [];

//   for (let i = 0; i < str.length; i++) {
//     substringsAtStart(str.substring(i, str.length)).forEach(s => substrings.push(s));
//   }

//   return substrings;
// }


function substrings(str) {
  return str.split('').map((_, i) => str.substring(i, str.length)).map(s => substringsAtStart(s)).reduce((a, b) => a.concat(b));
}

console.log(substrings('abcde'));