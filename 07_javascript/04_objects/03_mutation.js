var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo', {1: 'hi'}];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (typeof array1[i] === 'object') {
    array1[i][1] = 'bye';
  } else if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// Line 1 has the variable array1 initialized and assigned to the array object that contains several name values
// Line 2 has the variable array2 initialized and assigned to an empty array
// line 3 has the variable i initialized

// The first for loop on line 5 iterates through each value in the array assigned to array1 and
// pushes the value to array2

// The second for loop iterates through the array1 and capitalizes specific values.
// This does not have any impact on the values that are in array2 even though those were copied from array1
// Strings are immutable, so when the uppercase change is made, it is acually replacing the
// original string object with a new one.