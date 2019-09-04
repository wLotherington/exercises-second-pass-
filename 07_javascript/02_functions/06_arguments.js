var a = [7];

function myValue(b) {
  b[0] += 10;
}

myValue(a);
console.log(a);

// logs 7
// when 'a' is passed into the myValue function as an argument, the value 'a'
// is assigned to is copied to the local function variable 'b'. 'a' is not modified
// CORRECTION, it is copied since 7 is a primitive value. see above modification to
// the code to see what happens when the argument passed in is not a primitive value