
// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         console.log('Number ls Even');
//     }
//     else{
//         console.log('Number is odd');
//     }
// }
// isEven(40);
// isEven(35);


// return:--
// -----------
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
       return true;
    }
    else{
        return false;
    }
}
const myNumberEven = isEven(40);
console.log('Me Even', myNumberEven);

const herNumberEven = isEven(35);
console.log('She Even', herNumberEven);