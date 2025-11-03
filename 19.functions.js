function myName() {
    console.log("M");
    console.log("o");
    console.log("h");
    console.log("s");
    console.log("i");
    console.log("n");
}

myName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers()
addTwoNumbers(3, 4)
addTwoNumbers(3, 'a')
addTwoNumbers(3, '4')
addTwoNumbers(3, null)

const answer = addTwoNumbers(5, 6)

console.log("Answer: ", answer); //undefined

function addThreeNumebers(num1, num2, num3) {
    // let result = (num1+num2+num3)
    // return result
    return (num1 + num2 + num3)
    console.log("Mohsin");                     // unreachable because of above return
}

const result = addThreeNumebers(9, 8, 1)
console.log(result);

function loginUserMessage(name){
    return `${name} has been logged in`
}

console.log(loginUserMessage("Mohsin"));
console.log(loginUserMessage());    // undefined has logged in

function loginUserMessage2(name){
    if(name === undefined) {
        console.log("Please Enter a name");
        return
    }
    return `${name} has been logged in`
}

console.log(loginUserMessage2());


// name === undefined
// !name
// above both are same for the if statement condition because if name is empty then JS treat it as false
// so !name means true.


function loginUserMessage3(name = "mohsin"){
    return `${name} has been logged in`
}

console.log(loginUserMessage3());
