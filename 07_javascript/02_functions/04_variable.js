var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// this code will log 'This is global'
// the console.log() that is invoked within the function scope of
// someFunction has access to the global variable myVar and logs it's vale
// since there is no variable by that name in the function scope.