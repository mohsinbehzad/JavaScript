function setPlayerName(playername) {
    this.playername = playername;
    console.log('called');
}

function createPlayer(playername, age, position) {
    // setPlayerName(playername)
    // setPlayerName.call(playername)
    // the above two will be called but it will not print username

    setPlayerName.call(this, playername)
    this.age = age
    this.position = position
}

const player = new createPlayer('Ronaldo', 34, 'Striker')

console.log(player);