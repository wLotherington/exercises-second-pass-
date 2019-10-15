var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

// ['JavaScript', 'Ruby', 'Python']
// 3
// ['JavaScript', 'Ruby', 'Python', undefined]
// 4
// ['JavaScript']
// 1
// ['JavaScript', undefined, undefined]
// 3 
// ['JavaScript']
// ['JavaScript', undefined, 'Python']
// undefined
// 3