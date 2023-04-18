// var money = 10;
// var danish = 20;
// var toastBiscuit = 50; 
// var butterBread = 30;

// if(danish < money){
//     console.log('Dan dan danish khabo');
// }
// else if (toastBiscuit < money){
//     console.log('Toast e roast caa');
// }
// else if (butterBread < money){
//     console.log('utter bon r caa');
// }
// else { 
//     console.log('Shudu ca sasther jonno upokari');
// }

var money = 40;
var toastBiscuit = 50;
var danish = 40; 
var butterBread = 30;

if (toastBiscuit < money){
    console.log('Toast e roast caa');
}
else if(danish <= money){
    console.log('Dan dan danish khabo');
}
else if (butterBread < money){
    console.log('utter bon r caa');
}
else { 
    console.log('Shudu ca sasther jonno upokari');
}


// nasted conditions
var math = true;
var geometry = true;
var straightLint = false;

if(math == true){
    if(geometry == true){
        if(straightLint == true){

        }
        else{
            console.log('baka pothe colbe na');
        }
    }
}