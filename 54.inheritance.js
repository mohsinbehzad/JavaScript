class User {
    constructor(username) {
        this.username = username
    }

    printMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Student extends User {
    constructor(username, age, subject) {
        super(username)
        this.age = age
        this.subject = subject
    }

    enroll() {
        console.log(`${this.username} enrolled in ${this.subject}`);
    }
}

const mohsin = new Student('Mohsin', 24, 'Computer Science')

mohsin.enroll()
mohsin.printMe()

const ronaldo = new User('Ronaldo')

// ronaldo.enroll() 
// ronaldo is instanceOf User and it cannot access Student methods/functions

ronaldo.printMe()

console.log(ronaldo === mohsin);                                // false

console.log(ronaldo === User);                                  // false
console.log(mohsin === Student);                                // false

console.log(ronaldo instanceof User);                           // true
console.log(ronaldo instanceof Student);                        // false

console.log(mohsin instanceof User);                            // true
console.log(mohsin instanceof Student);                         // true