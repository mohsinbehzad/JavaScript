let myName = "Mohsin"
const id = 43
var city = "Swabi"
department = "Medical"         // it is also possible, but not preferable

// id = 10                                   // it gives error because const can't be changed
// console.log(id)

myName = "Behzad"
city = "Mardan"
department = "Computer Science"

// Note: we don't use var because of issue in block scope and functional scope

console.log(myName)
console.table([myName, city, department])

let state;

console.log(state) 