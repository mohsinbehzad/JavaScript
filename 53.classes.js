class createUser {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abcd`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new createUser('Mohsin', 'mohsin@gmail.com', 123)

console.log(userOne.encryptPassword());

console.log(userOne.changeUsername());

// behind the scenes

function createUserr(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

createUserr.prototype.encryptPassword = function () {
    return `${this.password}abcd`
}

createUserr.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const userTwo = new createUserr('Behzad', 'behzad@gmail.com', 456)

console.log(userTwo.changeUsername());
console.log(userTwo.encryptPassword());