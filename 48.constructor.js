function userDetails(username, age, email) {
    this.username = username,
        this.age = age,
        this.email = email

    this.greeting = function () {
        console.log(`Welcome ${username}`);
    }
    // return this
}

const userOne = new userDetails('Mohsin', 23, 'mohsin@gmail.com')
const userTwo = new userDetails('Behzad', 24, 'behzad@gmail.com')
// if you dont write new keyword then userTwo will override the userOne 

console.log(userOne);
console.log(userTwo);
userOne.greeting();
