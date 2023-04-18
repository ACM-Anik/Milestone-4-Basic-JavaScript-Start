// Find Odd Sum:--- 
// ----------------

// to get sum only:
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       sum = sum + element;
    //    console.log(index, element, sum); 
    }
    return sum;
}

//To get the odd numbers and put them in a array and sum of odd the odd numbers:--
// ------------------------------------------
function getOddNumbersOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
       }   
    }
    return oddNumbers;
}
const myNumbers = [12, 25, 45, 69, 43, 36, 50];
const oddNumbersSum = getSumOfAnArray(myNumbers);
console.log( 'All odd numbers sum', oddNumbersSum);

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);


