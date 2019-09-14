// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }


// // further exploration
// function oddNumbers(start, end) {
//   while (start <= end) {
//     if (start % 2 === 1) {
//       console.log(start);
//     }

//     start += 1
//   }
// }

// oddNumbers(10, 20);


// // further further exploration
function oddNumbers(a, b) {
  var large = a > b ? a : b;
  var small = a > b ? b : a;

  if (small % 2 === 1) {
    console.log(small);
  }

  small++;

  if (small <= large) {
    oddNumbers(small, large);
  }
}

oddNumbers(10, 20);