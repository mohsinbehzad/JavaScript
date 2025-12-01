const myObj = {
    username: "Mohsin",
    age: 23,
    email: 'mohsinbehzad14@gmail.com',

    getUserDetails: function () {
        // console.log(username);                       // it will give error
        // console.log(this.username);                  // Mohsin
        console.log(this);
    }
}

myObj.getUserDetails()

console.log(this);                                        // {}
