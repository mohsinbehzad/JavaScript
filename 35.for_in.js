// for in

const myObj = {
    "name": "Ronaldo",
    "number": 7,
    "position": "Striker"
}

for (const key in myObj) {
    console.log(`${key} value is ${myObj[key]}`);

}