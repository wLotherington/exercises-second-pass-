var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

// 'a'
// undefined
// 'd'
// 5
// ['a', 'b', 'c', 'f', -1: 'd', 'e': 5]

// [ 'a', 'b', 'c', 'f', '-1': 'd', e: 5 ]
// the -1 should be coerced into a sting when made a key and e doesn't need quote marks