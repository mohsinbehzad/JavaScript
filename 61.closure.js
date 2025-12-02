// JavaScript Closure Explained. A closure in JavaScript is a function that has access to variables in its parent scope, 
// even after the parent function has returned. Closures are created when a function is defined inside another function, 
// and the inner function retains access to the variables in the outer function's scope 

function abcd() {
    let x = 7;

    return function () {
        console.log(x);

    }
}

let result = abcd();
result()

function outer() {
    const username = 'mohsin'
    function inner() {
        console.log(username);
    }
    return inner()
}

const outerFunc = outer()
outerFunc