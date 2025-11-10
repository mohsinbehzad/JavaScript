const playersArray = ["Ronaldo", "Messi", "Ramos", "Pepe"]

// array.forEach(function (){})

playersArray.forEach(function (items) {
    console.log(items);
})

console.log('2.Printing by arrow function using forEach ');

// array.forEach(() => {})
playersArray.forEach((items) => { console.log(items) })


console.log('3.Printing by function using forEach');

// by function
function printMe(items) {
    console.log(items);
}

playersArray.forEach(printMe)

// note: (index, items, arrayList)
playersArray.forEach((item, index, arr) => {
    console.log(`The index ${index} has ${item}`);
    console.log(arr);
})

const myObj = [
    {
        playerName: "Ronaldo",
        shirtNumber: 7
    },
    {
        playerName: "Ramos",
        shirtNumber: 4
    },
    {
        playerName: "Messi",
        shirtNumber: 10
    }
]

myObj.forEach((items) => {
    console.log(items.shirtNumber);
})

// forEach dont return value
// filter return value