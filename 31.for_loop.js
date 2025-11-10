for (let i = 0; i < 10; i++) {
    i = i * 2
    console.log(i);
}


// nested loop

for (let i = 1; i < 5; i++) {
    console.log(`Outer loop is ${i}`);
    for (let j = 1; j < 3; j++) {
        console.log(`Inner loop i is ${i} and inner loop j is ${j}`);
    }
}

// array iteration

const myArray = ["Ronaldo", "Messi", "Ramos", "Pepe"]
console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
    console.log(myArray[index]);
}


// break an continue
// continue skips one iteration.
// break, breaks the loop

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue
        // it will skip below code for one time, so 3 will not be printed.
    }
    if (i == 7) {
        break
        // after 7, the loop will break
    }
    console.log(`i is ${i}`);
}