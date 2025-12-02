console.log(Math.PI);
Math.PI = 8
console.log(Math.PI);
// pi value didn't changed

const piDescriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log("PI Descriptor: ");

console.log(piDescriptor);

const myObj = {
    myName: 'Mohsin',
    age: 24,
    subject: 'CS',

    printMe: function () {
        console.log("I am Mohsin Behzad");
    }
}

const myObjDescriptor = Object.getOwnPropertyDescriptor(myObj, 'myName')
console.log("myObj Descriptor: ");

console.log(myObjDescriptor);

// To change descriptor values

Object.defineProperty(myObj, 'myName', {
    writable: false,
    enumerable: false
    // myName will not be enumerate now. by usinf for of loop below. it will not print myName
})

console.log('After changing properties of myObj');
console.log(Object.getOwnPropertyDescriptor(myObj, 'myName'));

for (let [key, value] of Object.entries(myObj)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}