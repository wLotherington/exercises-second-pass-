var rlSync = require('readline-sync')
// var phrase = rlSync.question('Please enter a phrase: ');
// var character_count = phrase.length
// console.log('There are ' + character_count + ' in "' + phrase + '".');

// further exploration
// var phrase = rlSync.question('Please enter a phrase: ').replace(/\s/g, '');
// var character_count = phrase.length
// console.log('There are ' + character_count + ' in "' + phrase + '".');

// further exploration2
var phrase = rlSync.question('Please enter a phrase: ').replace(/[^a-z]/ig, '');
var character_count = phrase.length
console.log('There are ' + character_count + ' in "' + phrase + '".');