const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let listArray = myArray.filter((num) => num > 6);
console.log(listArray);

let printArray = myArray.filter((nums) => { nums > 6 })
console.log(printArray);
// it will print empty array, becuase in above code { } is declared, but there is no return statement.

let returnArray = myArray.filter((num) => {
    return num > 6
})

console.log(returnArray);

// as forEach dont return so we can make empty array and store values in it

emptyArray = []

myArray.forEach((nums) => {
    if (nums > 6) {
        emptyArray.push(nums)
    }
})

console.log(emptyArray);