class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}abc`
    }

    set password(value) {
        this._password = value
    }
}

const userOne = new User('mohsin@gmail.com', 987)

// setter for email

userOne.email = 'behzad@gmail.com'

// getter for email

console.log(userOne.email);

// setter for password

userOne._password = 123

// getter for password

console.log(userOne.password);

console.log(userOne);
