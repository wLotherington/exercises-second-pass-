// function logInBox(str) {
//   let bannerSize = str.length + 2;

//   let horizontal = createLine('+', '-', bannerSize);
//   let vertical = createLine('|', ' ', bannerSize);

//   let banner = horizontal + '\n' +
//     vertical + '\n' +
//     '| ' + str + ' |\n' +
//     vertical + '\n' +
//     horizontal

//   console.log(banner);
// }

// function createLine(endChar, fillChar, length) {
//   let line = ''
  
//   for (let i = 0; i < length; i++) {
//     line += fillChar;
//   }

//   return endChar + line + endChar;
// }


// Further Exploration
// wrap text based on second argument specifying width
function logInBox(str, maxWidth) {
  let width = maxWidth || str.length;
  let horizontalRule = '+' + repeatedChar('-', width + 2) + '+';
  let emptyLine = '|' + repeatedChar(' ', width + 2) + '|';
  let wrappedMessage = wrapMessage(str, width);

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(wrappedMessage);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatedChar(char, times) {
  let repeated = '';

  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

function wrapMessage(str, width) {
  if (width === 0) { return '|  |' }

  let regex = new RegExp('.{1,' + width + '}' ,'g')
  let segments = str.match(regex);
  let lastSegment = segments.pop();

  while (lastSegment.length < width) {
    lastSegment += ' ';
  }

  segments.push(lastSegment);
  return segments.map(segment => '| ' + segment + ' |').join('\n');
}

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 1);
logInBox('');










