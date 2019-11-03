function wordSizes(str) {
  if (str.length === 0) return {};

  let wordLengthArr = str.split(' ').map(word => word.length);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}