const num = 400;
console.log(num);                           // 400

const num2 = new Number(300);
console.log(num2);                          // [Number: 300]
console.log(num2.toString());               // 300
console.log(num2.toString().length);        // 3
console.log(num2.toFixed(2));               // 300.00

const num3 = new Number(453.6689)
console.log(num3.toPrecision(5));

const num4 = new Number(1000000)
console.log(num4.toLocaleString());
console.log(num4.toLocaleString('en-PK'));
console.log(num4.toLocaleString('en-IN'));