function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// the code results in a reference error since the console.log invocation
// does not have access to the local variable within someFunction()
// CORRECTION - since the keyword 'var' was not used when the myVar variable was
// declared on line 2, this was automatically declared as a global variable