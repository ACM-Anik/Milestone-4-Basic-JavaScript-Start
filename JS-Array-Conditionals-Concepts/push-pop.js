var numbers =[50, 60, 78, 80];
numbers.push(63);
// console.log(numbers);

// 1. use push to add element to an array as the last element
var friends = ["balam", 'kalam', "malam"];
friends.push("daram");
friends.push("gelam");
// console.log(friends);

// 2. use pop to get the last number of the array
numbers.pop();
console.log(numbers);

// 2.1 if want to keep the pop element on a variable then 
var element = numbers.pop();
console.log(element);