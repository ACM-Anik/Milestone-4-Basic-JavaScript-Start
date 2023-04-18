// without return :
// function add(num1, num2){
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     console.log(sum);
// }
// add(20, 30);

// function return:--
function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}
// add(80, 90);
var total = add(80, 90);
console.log('total', total);



function bringSingra(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingra(200);
console.log('Eating Singaras: ', singaras);



