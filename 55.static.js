class User {
    constructor(username) {
        this.username = username
    }

    static printMe() {
        console.log(`Username: ${this.username}`);
    }
}

const mohsin = new User('Mohsin')
// mohsin.printMe()
// it will give error because printMe() is static

// Same goes for inheritance

class Student extends User {
    constructor(username, subject) {
        super(username)
        this.subject = subject
    }
}

const Stu = new Student('Behzad', 'CS')

// Stu.printMe()
// it will also give error because of Static