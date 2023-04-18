const phones = [
    { name: 'Samsung', camera: '32MP', storage: '64GB', price: 40000, color: 'Silver' },
    { name: 'Walton', camera: '10MP', storage: '16GB', price: 16000, color: 'Blue' },
    { name: 'Iphone', camera: '32MP', storage: '64GB', price: 80000, color: 'Silver' },
    { name: 'Nokia', camera: '12MP', storage: '32GB', price: 20000, color: 'Gray' },
    { name: 'Realme', camera: '16MP', storage: '64GB', price: 22000, color: 'Black' },
    { name: 'Xiaomi', camera: '16MP', storage: '64GB', price: 20000, color: 'sky-blue' },
    { name: 'Oppo', camera: '12MP', storage: '64GB', price: 18000, color: 'green' },
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if( phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const total = cheapestPhone(phones);
console.log(total);




