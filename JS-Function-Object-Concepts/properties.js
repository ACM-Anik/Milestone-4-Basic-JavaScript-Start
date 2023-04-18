var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// When you know the specific property name, use dot notation to get the property value:--
var penCount = shoppingCart.pen;

// Alternative system: 
// When you know the specific property name, use [] to get the property value:--
var penCount2 = shoppingCart['pen'];

console.log(shoppingCart);

//use var to know property name and value differently: 
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);

// To know the properties(keys) of the object:--
var properties = Object.keys(shoppingCart);
console.log(properties);

// To know the value of the keys(properties) in a object:--
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);


/*-------------------------------
 To set the property value :-
---------------------------------
*/
shoppingCart.mouse = 18;
console.log(shoppingCart);

shoppingCart['mouse'] = 10;
console.log(shoppingCart);

shoppingCart[propertyName] = 80;
console.log(shoppingCart);




