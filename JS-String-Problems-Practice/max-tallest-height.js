// Write a function to get the highest number in an array ? 
// :--
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
        largest = element;
        } 
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137, 288, 30];
const tallest = maxInArray(heights);
console.log(tallest);



// Write a function to get the lowest number in an array ?
// :-- 
function minInArray(numbers){
    let lowest = [0]; 
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > lowest){
            lowest = element;
        }
    }
    return lowest;
}
let myNum = [50, 60, 40, 20, 80, 30, 45, 70];
const lowest = minInArray(myNum);
console.log(lowest);
