function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// the variable status is in an outter scope compated to the console log on
// line 4, so it is logged when called.