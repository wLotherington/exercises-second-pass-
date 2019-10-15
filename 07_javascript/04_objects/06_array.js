var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var size = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
    size++;
  }

  return sum / size;
}

console.log(average(myArray));

// the average will be 20 / 2 = 10
// Array.length only counts array elements which are positive integer indexes