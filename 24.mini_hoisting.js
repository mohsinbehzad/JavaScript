// two ways to declare functions

console.log(multiplyTwo(5))
// it is called before the function, but it does not give error

// method 1
function multiplyTwo(num){
    return num*2
}



// console.log(multiplyThree(6));
// it gives error because it is called before the function

//method 2
const multiplyThree = function (num){
    return num*3
}

console.log(multiplyThree(5));
