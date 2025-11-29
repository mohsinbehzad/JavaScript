const attackers = ["Ronaldo", "Messi", "Haaland"];
const defenders = ["Ramos", "Pepe", "Marcelo"];

// push inserts whole array inside other array
attackers.push(defenders);
console.log(attackers);
console.log(attackers[3][2]);       // Marcelo

// concat combines both arrays
const newAttackers = ["Ronaldo", "Messi", "Haaland"];
const newDefenders = ["Ramos", "Pepe", "Marcelo"];
const allPlayers = newAttackers.concat(newDefenders);
console.log(allPlayers);

// Spread operator combines arrays
const forward = ["Ronaldo", "Messi", "Haaland"];
const backward = ["Ramos", "Pepe", "Marcelo"];
const all = [...forward, ...backward];
console.log(all);

const myArr = [0, 1, 2, [3, 4], [5, [6, 7, 8]]]
const convertToArr = myArr.flat();
const convertToDepthArr = myArr.flat(Infinity);
console.log(convertToArr);
console.log(convertToDepthArr);

console.log(Array.isArray("Mohsin"));           // false
console.log(Array.from("Mohsin"));              // converts String to Array

num1 = 150;
num2 = 300;
num3 = 500;

const nums = Array.of(num1, num2, num3);
console.log(nums);
