var numbers = [10, 60, 35, 75, 50, 65, 30, 28, 42, 55, 70, 25, 90];

for(var i = 0 ; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}