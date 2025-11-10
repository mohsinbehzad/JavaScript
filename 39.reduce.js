myArray = [1, 2, 3, 10]

const initialValue = 0
let sumOfArray = myArray.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator is ${accumulator} and Current value is ${currentValue}`);

    return accumulator + currentValue
}, initialValue)
// at first intial value is stored in accumulator, then accumulator+currentValue is stored in accumulator.
console.log(sumOfArray);

const shoppingCart = [
    {
        item: "macroni",
        price: 399
    },
    {
        item: "shampoo",
        price: 1099
    },
    {
        item: "shirt",
        price: 2030
    },
    {
        item: "chips",
        price: 50
    },
    {
        item: "watch",
        price: 550
    },
]

const sumOfItems = shoppingCart.reduce((acc, curr) => (acc + curr.price), 0)
console.log(sumOfItems);