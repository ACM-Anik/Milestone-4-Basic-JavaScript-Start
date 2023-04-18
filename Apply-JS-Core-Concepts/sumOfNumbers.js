// // To get a ordinary sum with loop:
// let sum = 0;
// for(i = 0; i <= 7; i++ ){
//     sum = sum + 1;
//     console.log(i, sum);
// }


function sumOfNumbers(numbers){
    let sum = 0;
    for(let i = 1; i <= numbers; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
} 
const sum = sumOfNumbers(7);
console.log('Total Sum', sum);




