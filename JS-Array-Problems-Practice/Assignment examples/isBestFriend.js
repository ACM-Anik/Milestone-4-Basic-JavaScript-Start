 /* 
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }
 */
// true
/* 
{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }
*/
// false


// function isBestFriend(objectOne, objectTwo) {
//     if (objectOne.name == objectTwo.friend && objectTwo.name == objectOne.friend){
//           return true;
//     } else {
//           return false;
//     }
//   }
// console.log(
//     isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" })
// );
 
 
 
 function isBestFriend(name1 , names2, names3){
        if(names1.firstFriends.name === names1.secondFriends.friend && names1.firstFriends.friend === names1.secondFriends.name){
            return true;
        }
        else{
            return false;
        }
    if(names2.firstFriends.name === names2.secondFriends.friend && names2.firstFriends.friend === names2.secondFriends.name){
        return true;
    }
    else {
        return false;
    }
    if(names3.firstFriends.name === names3.secondFriends.friend && names3.firstFriends.friend === names3.secondFriends.name){
        return true;
    }
    else{
        return false;
    } 
 }
 let names1 = {
    firstFriends: { name: "abul", friend: "babul" },
    secondFriends: { name: "babul", friend: "abul" },
 };
 let names2 ={
    firstFriends: { name: "abul", friend: "kabul" },
    secondFriends: { name: "kabul", friend: "sabul" }
  
 };
let names3 = {
    firstFriends: { name: "doe", friend: "alex" },
    secondFriends: { name: "john", friend: "doe" }
};
const bestFriend = isBestFriend(names1, names2, names3);
console.log(bestFriend);





