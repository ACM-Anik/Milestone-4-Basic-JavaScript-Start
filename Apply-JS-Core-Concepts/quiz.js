function inchToFeet(inch){
     var feet = inch/12;
       return feet;
}
const feet = inchToFeet(120);
console.log(feet);


// What will be the output?
function print(a, b, c){
  return a+2;
  return a*b;
  return b*c+a;
}
console.log(print(1,2,3));

var item = false;
if(item >= 50){
    console.log('correct');
}
// else if(false){
//     console.log();
// }
else{
    console.log(true);
}


// Crackerz:

function findGrade(marks){
  if(80 <= marks){
    const result = 'A';
     return result;
  }
  else if(60 <= marks && 80 > marks){
    const result = 'B';
    return result;
  }
  else if(50 <= marks && 60 > marks){
    const result = 'C';
    return result;
  }
  else if(40 <= marks && 50 > marks){
    const result = 'D';
    return result;
  }
  else{
    result = 'F';
    return result;
  }
}
let myScore = 95;
const result = findGrade(myScore);
console.log("My Grade:", result);