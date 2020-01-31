function makeMultipleLister(multiple) {
  return function() {
    for (let i = multiple; i < 100; i += multiple) {
      console.log(i);
    }
  };
}

var lister = makeMultipleLister(13);
lister();