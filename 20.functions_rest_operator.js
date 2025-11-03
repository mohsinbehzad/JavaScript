
function listShoppingItemPrices(...val){                      // ...val here is a rest operator
    return val
}

console.log(listShoppingItemPrices(200,500,300,5000));    // it will return in array form

function listShoppingCartPrices (val1, val2, ...val3){
    return val3
}

console.log(listShoppingCartPrices(200,500,300,5000)); 
// in above line, val1 = 200, val2 = 500 and ...val3 will become 300 and onwards