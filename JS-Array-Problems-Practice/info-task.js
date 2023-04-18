// Array:
// ১. array এর কিছু জিনিস আমরা অলরেডি জানি। index, length, push, pop 
// ২. for লুপ বা for of লুপ দিয়ে array এর সব উপাদান এর উপরে লুপ চালানো যায়। 
// ৩. array এর মধ্যে কোন উপাদান খুঁজতে চাইলে তুমি array এর মধ্যে indexOf দিয়ে index চেক করতে পারো 
// ৪. এইবার array এর মধ্যে এক উপাদান আছে কিনা সেটা includes দিয়েও চেক করতে পারো 
// ৫. এছাড়াও array এর ছোট একটা অংশ বের করার জন্য slice, splice ইউজ করতে পারো 
// ৬. splice জিনিসটা একটু প্যাচানো। এখন বুঝতে না পারলেও দেখে রাখো 



// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

function findAreaOfTriangle(length1, length2, length3 ){
    
}










// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function primeNumber(numbers){
    let primeArray = [];
    for(let i = 0; i < numbers.length; i++){
        const index = numbers[i];
        if( index % 2 !== 0 && index % 3 !== 0){
            primeArray.push(index);
        }
    }
    return primeArray;
}
let values = [12, 14, 11, 1, 15, 13, 16, 9, 10, 7, 3, 2, 18, 6, 5, 19, 20, 17];
const result = primeNumber(values);
console.log(result);