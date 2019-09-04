var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

// expected: 'Hello'
if (myBoolean) {
  console.log('Hello');
}

// expected: nothing
if (!myString) {
  console.log('World');
}

// expected: 'World'
if (!!myArray) {
  console.log('World');
}

// expected: '!'
if (myOtherString || myArray) {
  console.log('!');
}