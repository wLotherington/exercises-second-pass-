var person = { name: 'Victor' };
var otherPerson = person //{ name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true


// strict equality comparison compares the actual objects, not the values the objects hold