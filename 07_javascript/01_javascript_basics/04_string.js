// var name = 'Bob';
// var saveName = name;
// name = 'Alice';
// console.log(name, saveName);

// // answer: primitives are pass by value while objects are pass by reference.
// // This will log "Alice", "Bob" since strings are primitives

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);

// answer: "Bob", "Bob"
// String#toUpperCase does not mutate the original string