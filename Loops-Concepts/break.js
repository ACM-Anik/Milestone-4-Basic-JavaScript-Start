var roastGiven = 0;
while(roastGiven < 7){
    console.log('Roast den, Gift enechi!');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log('Roast den, please!!!');
    if(roastGiven > 4){
        break;
    }
}

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}
