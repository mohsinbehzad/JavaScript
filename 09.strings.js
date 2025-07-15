const myName = "Mohsin-Behzad"
const age = 23

// console.log(myName + age)

// Don't use above method, instead prefer to use String interpolation

console.log(`My name is ${myName} and my age is ${age}.`);

// Another method to declare strings

const petName = new String('Cat')

console.log(petName[0]);
console.log(petName.__proto__);

console.log(petName.length);
console.log(petName.toUpperCase());

console.log(petName.charAt(2));
console.log(petName.indexOf('a'));

const newName = myName.substring(0, 6)
console.log(newName);

const anotherName = myName.slice(-6, -1)
console.log(anotherName);

// slice() is more flexible with negative indices and does not swap arguments if start > end.

// substring() doesn’t support negative indices and swaps start and end if start > end.


//trim

const myStr = "     John Cena     "
console.log(myStr);
console.log(myStr.trim())


// replace

const url = "https://mohsin.com/mohsin%30khan"
console.log(url.replace('%30', '-'));

// includes

console.log(url.includes('mohsin'));

// split -> it splits string to array, based on specific character
console.log(myName.split('-'));

const anotherStr = 'Good Bad Better Best Worst'
console.log(anotherStr.split(' '));