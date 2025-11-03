const myNewArray = [15, 30, 45, 60]

function returnThirdIndex(myArray) {
    return myArray[2]
}

console.log(returnThirdIndex(myNewArray));
console.log(returnThirdIndex([10, 20, 30, 40]));

const player = {
    name: "Ronaldo",
    number: 7
}

function printObject(myObj) {
    return `${myObj.name} has the number ${myObj.number} `
}
// note: name and number is same inside function and object. otherwise it will be undefined.

console.log(printObject(player));
console.log(printObject(
    {
        name: "Messi",
        number: 10
    }
))
