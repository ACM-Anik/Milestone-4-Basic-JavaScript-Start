// Slice 
const friends = [12, 45, 46, 70, 54 , 35, 20];
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);


// Splice :
// Remove elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array

const numbers = [12, 45, 46, 70, 54 , 35, 20];
// const parts = numbers.splice(2, 5);
// console.log(parts);

const parts = numbers.splice(2, 5, 99, 100, 95);
console.log(parts);
