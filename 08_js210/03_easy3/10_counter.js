function wordSizes(str) {
  if (str.length === 0) return {};

  let wordLengthArr = str.split(' ').map(word => clean(word).length);
  let wordLengthCounts = {}

  for (let i = 0; i < wordLengthArr.length; i += 1) {
    let key = wordLengthArr[i];
    
    if (wordLengthCounts.hasOwnProperty(key)) {
      wordLengthCounts[key] += 1;
    } else {
      wordLengthCounts[key] = 1;
    }
  }

  return wordLengthCounts;
}

function clean(str) {
  return str.replace(/[^a-z]/gi, '');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}