const userEmail = "Mohsin@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const emptyString = ""

if (emptyString) {
    console.log("empty string is true");
} else {
    console.log("empty string is false");
}

const arr = []

if (arr) {
    console.log("empty array is true");
} else {
    console.log("empty array is false");
}

// falsy values are 0, -0, BigInt 0n, "", null, undefined, Nan
// truthy values are array [], "0", "false", " ", function(){}

// Correct way to check Array is by length()

if (arr.length === 0) {
    console.log("Empty array is true");
} else {
    console.log("Empty array is false");
}

// Object

const myObj = {}
if (Object.keys(myObj).length == 0) {
    console.log("Empty Object is true");
} else {
    console.log("Empty Obect is false");
}

// Nullish Coalescing Operator (??): null defined
// it is used to handle null or undefined
// mostly used where data is coming from database

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 300
console.log(val1);
val1 = undefined ?? 200
console.log(val1);
val1 = undefined ?? 30 ?? 45
console.log(val1);


// Ternary Operator
// condition ? true : false

let number = 100

number < 50 ? console.log("Number is less than 50") : console.log("Number is greater than 50")