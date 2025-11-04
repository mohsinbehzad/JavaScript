function first() {
    const parent = "Baba g";

    function second() {
        const child = "bachaa";
        console.log(parent)
    }

    // console.log(child)               it will give error because parent can't access child variables

    second()
}

first()


if (true) {
    const username = "Mohsin";
    if (username === "Mohsin ") {
        const hobby = "football";
        console.log(username+hobby);
    }
    // console.log(hobby);          it will give error because parent can't access child variables
}
// console.log(username);              it will also give error because of scoping
