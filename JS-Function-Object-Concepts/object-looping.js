var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [22, 18, 20, 21, 19, 20];

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const ke = Object.keys(shoppingCart);
console.log(ke);

const valu = Object.values(shoppingCart);
console.log(valu);

// var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
for(var i = 0; i < ke.length; i++){
    var propertyName = ke[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop:
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}
 