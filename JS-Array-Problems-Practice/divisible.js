/*
1. Show output from: 1 to 50 ?
2. if th number is divisible by 3 then instead of the number show 'foo'
3. if th number is divisible by 5 then instead of the number show 'bar'
4. if th number is divisible by both 3 and 5 then instead of the number show 'foobar'.
*/
for(let i = 0; i <= 50 ; i++){
    // Jehetu kono shorto age puron hoye gele pore are kaj kore na , fole jodi age i%3 likhi tobe condition r (i%3 && i%5)sorto e jabe na.
    // Tai (i%3 && i%5)sortota k upore rakhte hobe 
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar')
    }
    else if(i % 3 === 0){
        console.log('foo')
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
    
}
