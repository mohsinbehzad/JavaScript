function User(username, password) {
    this.username = username
    this.password = password

    Object.defineProperty(this, 'username', {
        get: function () {
            return this._username.toUpperCase()
        },
        set: function (value) {
            this._username = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password}abc`
        },

        set: function (value) {
            this._password = value
        }
    })
}

const userOne = new User('mohsin', 123)
userOne.password = 456
console.log(userOne.password);

// but mostly classes is used in getter and setters instead of above function