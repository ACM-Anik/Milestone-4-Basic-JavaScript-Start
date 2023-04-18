// Inch to feet:-- 
const myInches = 12;
const myFeet = myInches / 12;
// console.log(myFeet);


// const dadajiInches = 144;
// const dadajiFeet = dadajiInches / 12;
// console.log('Dadaji',dadajiFeet);

// const thammaInches = 60;
// const thammaFeet = thammaInches / 12;
// console.log('Thamma', thammaFeet);


function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadajiInches = 144;
const dadajiFeet = inchesToFeet(dadajiInches);
console.log("dadajiFeet:", dadajiFeet);


const thammaInches = 160;
const thammaFeet = inchesToFeet(thammaInches);
console.log('ThammaFeet:', thammaFeet.toFixed(2));