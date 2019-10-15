// var myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// var prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);
// console.log(myObject)

// // both will return '456'
// // line 7 assigns the variable prop2 to the string value '456'
// // line 8 assigns the myObject.prop2 to '456'
// // line 9 assigns myObject['456'] to '678'

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

