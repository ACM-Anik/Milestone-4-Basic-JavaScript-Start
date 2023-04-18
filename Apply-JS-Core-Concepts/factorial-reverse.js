// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }
// const num = 6;
// const fact = factorial(num);
// console.log( fact,'is the factorial Of', num);



// While loop :
function factorial(number){
    let i = number;
    result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const output = factorial(7);
console.log(output);


