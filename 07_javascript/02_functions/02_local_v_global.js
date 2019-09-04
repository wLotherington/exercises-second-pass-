var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log 'This is local'
// the invocation of console.log() is within the function scope of someFunction().
// Within this scope there is a local variable names myVar that was declared on
// line 4 and assigned the value of 'This is local'.