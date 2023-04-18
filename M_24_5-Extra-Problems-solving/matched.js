const numbers = [45, 60, 70, 40, 20, 35];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for Of loop:-
for(const number of numbers){
    console.log(number);
}



const products = [
    {id: 1, name: "Samsung Phone", price: 60000},
    {id: 2, name: "Iphone Phone", price: 80000},
    {id: 3, name: "Mac Laptop", price: 120000},
    {id: 4, name: "RealMe Phone", price: 20000},
    {id: 5, name: "Dell Laptop", price: 50000},
    {id: 6, name: "Walton phone", price: 15000},
    {id: 7, name: "Lenovo Yoga Laptop", price: 60000}
];

// for(const product of products){
//     console.log(product); 
// }


// How to find a word for an array and a Object:-
function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toUpperCase().includes(search.toUpperCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'Phone');
console.log(result);


