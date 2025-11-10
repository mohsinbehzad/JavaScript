// ["", "", ""]                         Strings inside Array
// [{}, {}, {}]                          objects inside Array

// for of
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// if you dont want to print spaces then continue can be used as shown below
const myName = "My name is Mohsin"
for (const name of myName) {
    if(name == " "){
        continue
    }
    console.log(`each char of my Name is ${name}`);
}