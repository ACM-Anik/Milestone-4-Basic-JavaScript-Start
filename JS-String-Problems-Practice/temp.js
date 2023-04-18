// To exchange the value of the vars:----
let first = 5;
let second = 7;
console.log(first, second);
// Approach 1:--
const temp = first;
first = second;
second = temp;
console.log(first, second);


// Approach 2:--
let num1 = 5;
let num2 = 7;
console.log(num1, num2);
// Distrusting
[num1 , num2] = [num2 , num1];
console.log(num1 , num2);