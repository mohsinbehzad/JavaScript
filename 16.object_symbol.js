// Question: take a symbol and put it in an object and print the value.

// Wrong Method

const mySymOne = Symbol("I am Mohsin")
const mySymTwo = Symbol("I am Khan")

const objOne = {
    myName: "Behzad",
    mySymOne: "I am String inside the symbol",
    mySymTwo: mySymTwo
}

console.log(objOne.mySymOne);                         // I am String inside the symbol
console.log(objOne[mySymOne]);                        // undefined
console.log(typeof objOne[mySymOne]);                 // undefined

console.log(objOne.mySymTwo);                         // Symbol(I am Khan) 
console.log(objOne[mySymTwo]);                        // undefined
console.log(typeof objOne[mySymTwo]);                 // undefined



// Correct Method

const mySym = Symbol("I am Symbol")

const myObj = {
    myName: "Mohsin",
    [mySym]: mySym
}

console.log(myObj.mySym);               // undefined
console.log(myObj[mySym]);              // Symbol(I am Symbol)
console.log(typeof myObj[mySym]);       // symbol