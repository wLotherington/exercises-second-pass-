var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// logs 7
// the parameter 'a' of myValue function is a local variable that shadows the
// global variable of the same name. since 7 is a primitive value, the global
// varaible is not modified