// Two types of Data Type

// primitive
// they are callback values, means if you make changes in them in any other place, there copy changes not there actual value.
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type, also known as non-primitive
// direct reference in memory
// Array, Objects, Functions


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)     // false
// the above symbols have same('123') data but they are unique so, false

const bigNumber = 83257093245693275212n


const heroes = ["SuperMan", "SpiderMan", "Flash"];

let myObj = {
    myName: "Mohsin",
    age: 23
}

const myFunc = function () {
    console.log("Hello World")
}

console.log(typeof bigNumber);       // bigInt
console.log(typeof myFunc);          // Object Function





// JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
// and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.


// Return Type of Variables in JavaScript
// 1) Primitive Types
//      Number => number
//      String => string
//      Boolean => boolean
//      null => object
//      undefined => undefined
//      Symbol => symbol
//      BigInt => bigint

// 2) Non-Primitive Types
//      Arrays => object
//      Function => function
//      Object => object 
