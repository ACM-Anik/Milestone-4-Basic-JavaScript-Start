const player = {
    name : "Sakib Al Hasan",
    id : 75,
    address: "Dhaka",
    match: function(){
        console.log("He played many many matches")
    },
    isSingle : true,
    playingLeague: [{name: "BPL", season : "all"}, {name: "IPL", season: "all except 3"}],
    friends : ["Anik", "Liton", "Dhoni", "Masrafee", "Kholi"], 
    car : {
        brand : 'tesla',
        price : 5000000,
        made : 2023,
        manufacturer : {
            name: "Tesla Co.",
            ceo: "Elon Musk",
            country: "USA"
        },
        color: "White"
    }
}
console.log(player.friends);
console.log(player.match);
player.match();
 



