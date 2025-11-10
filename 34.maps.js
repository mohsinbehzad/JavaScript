const map = new Map()
map.set('PK', "Pakistan")
map.set('KSA', 'Saudi Arabia')
map.set('EN', 'England')

for (const i of map) {
    console.log(i);
}

for (const [keys, values] of map) {
    console.log(keys, ':-', values);
}

// forof will not work for Objects.
// forin is used for objects