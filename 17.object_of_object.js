const myObj = new Object();                  // singleton object
const myObj2 = {}                            // non singleton object

console.log(myObj);
console.log(myObj2);

myObj2.name = "Mohsin"
myObj2.age = 24
console.log(myObj2);

myObj.name = "Khan"
myObj.age = 23
console.log(myObj);

// Object of Object

let userObj = {
    email: "mohsin@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mohsin",
            lastName: "Behzad"
        }
    }
}

console.log(userObj.fullName.userFullName.firstName);

// concatenation of objects

const obj1 = {
    1: "Mohsin",
    2: "Behzad"
}

const obj2 = {
    3: "Khan",
    4: "Mardan"
}

const obj3 = { obj1, obj2 };
console.log(obj3);


// to correctly concatenate we will do it by using assign method of Object

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = { ...obj1, ...obj2 }
console.log(obj5);

// Objects of Array

const players = [
    {
        name: 'Ronaldo',
        number: 7
    },
    {
        name: 'Messi',
        number: 10
    },
    {
        name: 'Ramos',
        number: 4
    }
]

console.log(players[2]);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(players);
console.log(Object.entries(players));

console.log(myObj.hasOwnProperty('name'));
