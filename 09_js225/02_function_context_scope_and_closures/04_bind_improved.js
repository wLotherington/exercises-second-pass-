function myBind() {
  return function() {};
}

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

addFive(10) // 15