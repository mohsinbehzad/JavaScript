const players = ['Ronaldo', 'Ramos']

let playersPosition = {
    Ronaldo: 'Striker',
    Ramos: 'Defender',

    getPlayerPosition: function () {
        console.log(`Ronaldo position is ${this.Ronaldo}`);
    }
}

Object.prototype.mohsin = function () {
    console.log('Mohsin is present in all Objects');

}
// It adds the property in the top level hierarchy, as here in the object. (Object is top level) 
// and it will be accesed by function, string and array as well

players.mohsin()

playersPosition.mohsin()

// above both works fine, array and object accessed the mohsin.

// But if we make Array.prototype then it will be only accessed by array, and not object, string and function

Array.prototype.mohsinArray = function () {
    console.log(`I am Present in Array`);
}

players.mohsinArray()

// playersPosition.mohsinArray()
// playersPosition is Object so it gives error. because array is down the Object in heirarchy.


// String Prototype

let anotherUsername = 'Mohsin      '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

'   Behzad    '.trueLength()

'Mohsin Behzad    '.trueLength()