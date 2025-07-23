// object can be made by literal and constructor

// singleton
// Object.create

// object literals

const myObj = {
    myName: "Mohsin",
    "fullName": "Mohsin Behzad",
    email: "mohsin@gmail.com",
    age: 23,
    location: "KPK",
    isLoggedIn: false,
    lastLoginDays: ['Friday', 'Sunday'],
    "my pet": "cat"
}

// Two ways to access data inside object
console.log(myObj.myName);
console.log(myObj["myName"]);
console.log(myObj.fullName);
console.log(myObj["fullName"]);
// console.log(myObj.my pet);                     // it gives error because there is space between my and pet. so we will use the second method to access it
console.log(myObj["my pet"]);

myObj.greeting = function () {
    console.log("Hello!");
}
// The function itself simply logs "Hello!" to the console but doesn't return any value (implicitly returns undefined).

console.log(myObj.greeting());       // it will print Hello! then undefined because greeting() function doesn't return anything.
myObj.greeting();

myObj.greetingTwo = function () {
    console.log("Hello World!");
    return "Hello from the function "
}

// console.log(myObj.greetingTwo);              // This logs the function definition (or the reference to the function) stored in the greeting property of myObj. You're not calling the function; you're just referring to it.

console.log(myObj.greetingTwo());

myObj.greetingThree = function () {
    console.log(`My Name is ${this.myName}`);
}

myObj.greetingThree();

// after object freeze, no changes will be done in the Object.

console.log(myObj.email);

myObj.email = "mohsin@yahoo.com"
console.log(myObj.email);

Object.freeze(myObj)
myObj.email = "mohsin@123.com"             // it will not work because of Object.freeze above
console.log(myObj.email);