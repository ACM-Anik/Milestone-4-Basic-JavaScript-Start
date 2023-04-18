function add(num1, num2){
    if(typeof num1 !== 'number' ){
        return "Please enter a number";
    }
    else{
        return num1 + num2;
    }
    
}
const result = add(12, "18");
console.log(result);


// || typeof num2 !== 'number'