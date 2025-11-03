let a = 700
var c = 500

if (true) {
    let a = 20
    const b = 40
    var c = 90
    console.log("inner let a is", a);
    console.log("inner var c is", c);


}

console.log("outer let a is", a);      // it will print 700 and not 20, because let a = 20 is inside a local scope of id. which cannot be accessed by global scope.
console.log("outer var c is", c);      // it should print 500 but instead it will print 90, which is drawback of var. it doesn't support scope
// console.log(b);                     // const b cannot be accessed, because it is in if block means it is inside local scope of if.
