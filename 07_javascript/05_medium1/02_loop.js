var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// technically it will produce the expected result, but it is only by chance.
// the incrementor variable is not incremented when it is a multiple of 3 so the count it off.

// I was wrong, it gets stuck 