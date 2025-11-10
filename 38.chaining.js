myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = myArray.map((nums) => nums * 10)
console.log(arr);


// chaining

let chainArr = myArray
    .map((nums) => nums + 2)
    .map((nums) => nums * 10)
    .filter((nums) => nums > 50)

console.log(chainArr);