// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//          console.log('Your year is a Leap Year');
//     }
//     else{
//         console.log('Your year is not a Leap Year');
//     }
// }
// isLeapYear(1952);
// isLeapYear(1960);


// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//        return false;
//     }
// }
// const isMyLeapYear = isLeapYear(1952);
// console.log('My year:', isMyLeapYear);
// const isHerLeapYear = isLeapYear(1960);
// console.log('Her year:', isHerLeapYear);



function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}
const isMyLeapYear = isLeapYear(1952);
console.log('My year:', isMyLeapYear);
const isHerLeapYear = isLeapYear(1960);
console.log('Her year:', isHerLeapYear);

