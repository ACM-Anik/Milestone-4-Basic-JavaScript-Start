const shoppingCart = [
    {name: 'Shirt', price: 1200, quantity: 5 },
    {name: 'Pant', price: 1300, quantity: 4 },
    {name: 'shoe', price: 2000, quantity: 3 },
    {name: 'Belt', price: 600, quantity: 2 },
    {name: 'Sunglass', price: 800, quantity: 1 },
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const totalPrice = product.price * product.quantity;
        sum = sum + totalPrice;
    }
    return sum;
}
const totalExpense = totalCost(shoppingCart);
console.log("Total expense today is:" ,totalExpense);



