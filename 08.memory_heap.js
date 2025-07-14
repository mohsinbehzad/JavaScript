// Heap is used in non primitive types
// it gives reference, original value

let userOne = {
    name: "Mohsin",
    age: 23
}

let userTwo = userOne

userTwo.name = "Khan"

console.log(userOne.name);
console.log(userTwo.name);

// userOne.name changes to "Khan" because of reference of userTwo to original value