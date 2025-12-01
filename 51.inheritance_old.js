// in old times __proto__ was used to link objects, as there were no classes

const user = {
    name: 'Mohsin',
    age: 23
}

const player = {
    substitute: false
}

const coach = {
    salary: '600000 pkr'
}

const training = {
    time: '2 hr',
    __proto__: coach
    // training object can now access coach
}

user.__proto__ = player

// user can now access all properties of player

// Modern Syntax
Object.setPrototypeOf(user, player)