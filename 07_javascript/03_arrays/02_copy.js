var myArray = [1, 2, 3, 4];
var myOtherArray = [];

for (let i = 0; i < myArray.length; i++) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);






// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);