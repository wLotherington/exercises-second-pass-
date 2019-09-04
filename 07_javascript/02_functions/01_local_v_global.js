var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// The code will log 'This is global' since line 4 is a variable declaration
// of a local variable with the same name as the global varaible.