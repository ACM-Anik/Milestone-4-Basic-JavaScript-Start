// জাভাস্ক্রিপ্ট প্রাকটিস এন্ড সেলফ এসেসমেন্ট (প্রাকটিস/রিভিশন ডে)

// #module_release #basic_javascript_milestone #module_23_5 

// বেসিক কনসেপ্ট চেকলিস্ট/সেলফ এসেসমেন্ট:

// একটা কাগজ কলম নিয়ে বসো। নিচের প্রশ্নগুলোর উত্তর যদি হাঁ হয় তাহলে ১ লিখবে আর যদি না হয় তাহলে শূন্য লিখবে। এবং জিনিসগুলো ভিজুয়াল ষ্টুডিও কোড এ প্রাকটিস করবে। কোন একটা জিনিস নিজে নিজে করতে পারলে অবশ্যই ভালো। আর কোন একটা জিনিস নিজে নিজে না পারলে, আমাদের ভিডিও না দেখে যদি গুগলে সার্চ দিয়ে বের করে হলেও যদি করে ফেলতে পারো তাহলেও চলবে। 

 

// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

// var myString = ["Anik", "Ayon", "Simanto"];
// var myNumber = [1, 2, 3, 4, 5, 6, 7];
// var myBoolean = [true, false];



// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

// var fruits = ["apple", "Banana", "Mango"];
// fruits[0] = "orange";
// console.log(fruits);
// let fruits = ["apple", "Banana", "Mango"];



// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// var num1 = 20;
// var num2 = 10;
// var sum = num1 + num2;
// var sumSubstraction = num1 - num2;
// var sumMultiplication = num1 * num2;
// var sumDivision = num1 / num2;
// var sumRemainder = num1 % num2;



// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

// let num1 = 30;
// let num2 = 20;
// if(num1 > num2){
//    return true;
// }


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

// let number1 = 200;
// let number2 = 100; 
// let number3 = 50;
// if(num1 > num2 && num1 > num3 || num2 > num3 ){
//     return "num1 is the biggest number"
// }



// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// let num1 = 200;
// let num2 = 100; 
// let num3 = 50;
// if(num1 > num2 && num1 > num3 ){
//     return "num1 is the biggest number";
// }
// else if(num1 < num2 && num2 > num3){
//     return "num2 is the biggest number";
// }
// else{
//     return "num3 is the biggest number";
// }

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
var oddNums = 7;
while(oddNums < 20){
    oddNums = oddNums + 2;
   console.log(oddNums);
}


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// var myArray = [1, 2, 3, 4, 5, 6, 7];
// const arrayLength = myArray.length;
// console.log(arrayLength);
// myArray[3] = 0;
// myArray.push(14, 15);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);




// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
let loopArray = [1, 2, 3, 4, 5, 6, 7];
for( let i = 0; i < loopArray.length; i++){
    let index = loopArray[i];
    // return index;
}




// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
function biggestNumber(numbers){
    let upperOf80 = [];
    for(let i = 0; i < numbers.length; i++){
        element = numbers[i];
        if(element > 80){
            upperOf80.push(element);
        }
    }
    return upperOf80;
}
const upperOf80 = biggestNumber([120, 255, 20, 80, 50, 100, 80, 90, 160, 120, 130, 90])
console.log(upperOf80);

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
function multiplication(num1, num2, num3){
    const result = num1 * num2 * num3;
    return result;
}
const myMulti = multiplication(10, 20, 30);
console.log(myMulti);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান বের কর এবং কোন একটির মান চেইঞ্জ করবে। 
let phone = {
    name: "Realme",
    Model: "9i",
    color: "Black",
    rom: "128GB",
    ram: "6GB",
    camera: "50MP"
};
let knownPropertyValue = phone.color;
// console.log(knownPropertyValue);
phone.color ="Blue";
console.log(phone.color);




// উপরের ১২টা কাজের মধ্যে তুমি যদি ৯টা থেকে ১০ টা বা তার বেশি কাজ করে ফেলতে পারো। তাহলে তোমার বেসিক কনসেপ্ট ঠিক আছে। যদি ৫টা থেকে ৯টা অর্থাৎ ৫ টা, ৬টা, ৭টা বা ৮টা করতে পারো। তাহলে তোমাকে হার্ডওয়ার্ক করতে হবে। একটু বেশি সময় দিতে হবে। আর তুমি যদি ৫টা এর কম। অর্থাৎ ০, বা ১টা বা ২টা বা ৩টা বা ৪টা পেয়ে থাকো তাহলে তোমাকে ডিফারেন্টভাবে জাভাস্ক্রিপ্ট এ আরো সময় দিতে হবে। সেক্ষেত্রে তুমি আমাদের ইমেইল করে দিতে পারো web@programming-hero.com এ। তোমার ওভারঅল অবস্থা লিখে। আমরা তোমাকে স্পেশালভাবে তোমার সিচুয়েশন অনুসারে গাইডলাইন দিবো। 


// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch(feet){
    const inches = feet * 12;
    return inches; 
}
const inches = feetToInch(5);
console.log(inches);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(sentimeters){
    const meters = sentimeters * 0.01;
    console.log(meters);
}
const meters = centimeterToMeter(1500);

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা |

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

function paperRequirements(firstBookNumbers, secondBookNumbers, thirdBookNumbers){
    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;
    const firstBookNeededPages = firstBookPage * firstBookNumbers; 
    const secondBookNeededPages = secondBookPage * secondBookNumbers; 
    const thirdBookNeededPages = thirdBookPage * thirdBookNumbers;
    const totalPages = firstBookNeededPages + secondBookNeededPages + thirdBookNeededPages;
    return totalPages;
}
const totalBookPages = paperRequirements(10, 8, 15);
console.log(totalBookPages);


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend(friends){
    let largest = "";
    for(let i = 0; i < friends.length; i++){
        const element = friends[i];
        if(element.length > largest.length){
            largest = element;
        }
    }
    console.log(largest);
}
let myFriends = ["Joy", "Imran", "Shanto", "Khandokar", "Polash", "Reza", "Sanjit", 
                 "Hasib", "Joyrup", "Tapu", "Raihan", "Shanto Sharma", "Hamid" , "Nayem", "Pias" ];
const longestNamedFriend = bestFriend(myFriends);

/*
// Demo of different prosses //
function longest_str_in_array(arra) { 
    let max_str = arra[0]. length;
    let ans = arra[0];
    for (let i = 1; i < arra. length; i++) { 
        const maxi = arra[i]. length; 
        if (maxi > max_str) {
            ans = arra[i]; max_str = maxi; 
        } 
    } 
    return ans; 
} 
const arr = [];
console.log(ans);
*/


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

function positiveNumbers(numbersArray){
    let positiveArray = [];

    for(let i = 0; i < numbersArray.length; i++){
        const element = numbers[i];
        if(element >= 0){
        positiveArray.push(element);
        }
        else{
            // break;
        }
    }
    return positiveArray;
}
let numbers = [1, -3, 4, -4, 7, -5, 3, 8, 5, -9, -7, 6, 9, -2, -6, -1, 2 ];
const allPositiveNumbers = positiveNumbers(numbers);
console.log(allPositiveNumbers);

// চেষ্টা করবে আমাদের ভিডিও না দেখে প্রব্লেমগুলো করতে। দরকার হলে গুগলে সার্চ দিতে পারবে। আর একান্তই দরকার হলে প্রব্লেম সলভিং এর জন্য আমাদের ভিডিও দেখতে পারবে। তারপর উপরের ৫টা প্রব্লেম সলভিং চ্যালেঞ্জ এর মধ্যে তুমি যদি ৪টা বা ৫টা করে ফেলতে পারো। তাহলে আর তোমার কোন টেনশন নাই। তুমি সামনে এগুতে পারবে। আর তুমি যদি ২টা বা ৩ টা করতে পারো। তাহলে কিছুটা হার্ডওয়ার্ক করতে হবে। আরেকটু ভালো করে বুঝার চেষ্টা করবে। তবে চেষ্টা করতে করতে সামনে এগুতে পারবে। আর যদি একটাও না পারো বা মাত্র একটা পারো। তাহলে আমাদের ইমেইল করে দাও web@programming-hero.com এ । আমরা তোমাকে বিস্তারিত ইমেইলে জানিয়ে দিবো। 


// ভালো করে প্রাকটিস করো। আর তারপরেও সময় থাকলে এই মাইলস্টোন এর সিম্পল প্রবলেম সলভিংগুলা (recursive বাদে বাকি প্রব্লেমগুলো) ভালো করে দেখো। সেগুলা রিলেটেড সহজ কিছু প্রবলেম এসাইনমেন্ট এ থাকবে। 

// এখন প্যারা নিলে, সামনে আরাম পাবে।