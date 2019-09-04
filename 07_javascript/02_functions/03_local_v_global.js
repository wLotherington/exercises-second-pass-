var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// the code will log 'This is local'
// line 4 reassigns the global variable myVar to the value 'This is local'