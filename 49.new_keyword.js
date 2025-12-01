function createUser(username, age) {
    this.username = username
    this.age = age
}

createUser.prototype.increment = function () {
    return this.age++
}

createUser.prototype.printMe = function () {
    console.log(`User is ${this.username} and age is ${this.age}`);
}

const userOne = new createUser('Mohsin', 23)
const userTwo = new createUser('Behzad', 25)

userOne.printMe()

userTwo.increment()
userTwo.printMe()

// The new keyword in JavaScript is used to create an instance of an object from a constructor function or a class.
// When new is used, it performs the following actions:
// Creates a new empty object:
// A plain JavaScript object is created.
// Sets the prototype:
// The newly created object's internal [[Prototype]] property is set to the prototype property of the constructor function. This establishes inheritance.
// Binds this:
// The this keyword within the constructor function is bound to the new object.
// Executes the constructor:
// The constructor function is called with the specified arguments, and the this keyword refers to the newly created object.
// Returns the object:
// If the constructor doesn't explicitly return an object, it implicitly returns the newly created object.