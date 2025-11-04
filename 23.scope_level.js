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