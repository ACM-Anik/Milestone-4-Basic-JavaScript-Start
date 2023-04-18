// স্ট্রিং আর সিম্পল কিছু জাভাস্ক্রিপ্ট প্রব্লেম ( মডিউল-22)

// #module_release #basic_javascript_milestone #module_22

// স্ট্রিং:

// ১. স্ট্রিং immutable 
// ২. স্ট্রিং এর length আছে 
// ৩. index অনুসারে string এর ভিতরের সব letter কে একসেস করা যায়। 
// ৪. for লুপ বা for of লুপ দিয়ে স্ট্রিং এর সব ক্যারেক্টার এর উপরে লুপ চালানো যায়। 
// ৫. toLowerCase এবং toUpperCase দিয়ে কোন স্ট্রিং কে সব ছোট হাতের বা সব বড় হাতের অক্ষর বানিয়ে ফেলা যায় 
// ৬. স্ট্রিং এর মধ্যে কোন এক বা একাধিক অক্ষর খুঁজতে চাইলে তুমি array এর মতো করে indexOf দিয়ে index চেক করতে পারো 
// ৭. স্ট্রিং এর মধ্যে এক বা একাধিক অক্ষর আছে কিনা সেটা includes দিয়েও চেক করতে পারো 
// ৮. এছাড়াও স্ট্রিং এর ছোট একটা অংশ বের করার জন্য split, slice, substring ইউজ করতে পারো 


// ফ্যাক্টোরিয়ালের এর মতো করে আসছে fibonacci সেখানে for লুপ দিয়ে একটা fibonacci series বের করা হইছে। এইখানে ফিবোনাচ্চি বা এই ধরণের ম্যাথ বুঝতে পারলে অবশ্যই ভালো। তবে কোন কারণে বুঝতে না পারলেও যেন কি করা লাগলে কি ইউজ করতে হয়। সেটার দিকে খেয়াল করো। না বুঝতে পারলেও মাথা গরম করার দরকার নাই। জাস্ট আমাদের জিজ্ঞেস করবে। বুঝে নেয়ার চেষ্টা করবে। সাপোর্ট সেশনে জয়েন করে আদায় করে নিবে। 

// জাভাস্ক্রিপ্ট: 
// প্রবলেম তখনই প্রবলেম, যখন তুমি সেটা আঁকড়ে ধরে বসে থাকো । আর একবার সমাধান করে ফেলতে পারলে; প্রবলেম আর প্রবলেম থাকে না। সেটা নলেজ, স্কিল আর এক্সপেরিয়েন্স এ কনভার্ট হয়ে যায়।


// প্রাকটিস প্রব্লেম- ৫ খানা:--

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

var score = [20, 30, 15, 40, 10, 55, 66, 90, 12, 35, 55];
let lowestNum = score[0];
for(let i = 0; i < score.length; i++){
    element = score[i];
    if(lowestNum > element){
        lowestNum= element;
    }
}
console.log(lowestNum);



// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

let num1 = 15;
let num2 = 20;
let num3 = 10;
if(num1 < num2 && num1 < num3){
        console.log("Num3 is the lowest");
}
else if (num2 < num3){
    console.log("num2 is the lowest");
}
else if(num3 < num1 && num3 < num2){
    console.log("num3 is the lowest");
}
else{
    console.log("They are equal");
}



// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function avarageNum(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i]; 
        total = element + total;  
    } 
    let numLength = numbers.length;
    const avarage = total / numLength;
    return avarage;

}
let numArray = [20, 10, 30, 45, 70, 65, 38, 22, 40, 50];
const avarage = avarageNum(numArray);
console.log(avarage)




// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function findArea(length, width){
    const rectangle = length * width;
    return rectangle;
}
const rectangle = findArea(30, 40);
console.log(rectangle);



// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
let myArray = [20, 30, 35, 60, 80, 70, 65, 45, 50];
function findSecondLargest(numbers){
    f
}
const SecondLargest = findSecondLargest(myArray);