// Factorial:
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1

function factorial(numbers){
    let result = 1;
    for(let i = 1; i <= 8; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(7);
console.log(result);

