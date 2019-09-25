function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = ''
    for (let j = n; j > 0; j--) {
      row += i >= j ? '*' : ' ';
    }
    console.log(row);
  }
}

triangle(5);
triangle(9);