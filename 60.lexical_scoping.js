function outer() {
    const username = 'mohsin'
    function inner() {
        console.log(username);
        // inner or child function has access to outer or parent function variables
    }
    inner()
}

outer()