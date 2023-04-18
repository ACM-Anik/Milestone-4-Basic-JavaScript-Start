const shoppingCart = [
    {name: 'Shirt', price: 1400 },
    {name: 'Pant', price: 1500 },
    {name: 'shoe', price: 1200 },
    {name: 'Belt', price: 600 },
    {name: 'Sunglass', price: 500 },
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        //  console.log(product);
    }
    return sum;
}
const total = totalCost(shoppingCart);
console.log(total);