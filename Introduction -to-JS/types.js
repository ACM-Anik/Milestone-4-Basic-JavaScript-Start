var price = 100;
console.log(typeof price);

var price = '100';
// console.log(typeof price);

var isHappy = true;
// console.log(typeof isHappy);

var handsome;
// console.log(handsome);


var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);

// To fixed the result to short (but it will be in string)
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);


// to show it in number 
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
sum = parseFloat(sum);
console.log(sum);
