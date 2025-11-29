let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof (myDate));

let myCreatedDate = new Date(2025, 0, 23);
console.log(myCreatedDate.toDateString());
let anotherDate = new Date(2025, 3, 24, 6, 38);             // year, month, date, hour, minute
console.log(anotherDate.toString());

let customDate = new Date("01-25-2025")
console.log(customDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));               // gives answer in seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);