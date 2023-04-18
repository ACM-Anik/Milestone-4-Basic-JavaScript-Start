var i = 0;
for (i=0; i < 5; i++){};
console.log(i);

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue;
  }
  console.log(marks[i]);
};


var name = false;
console.log(typeof name );

var i = 5;
for (; i < 5; i++) {
 console.log(i);
}
