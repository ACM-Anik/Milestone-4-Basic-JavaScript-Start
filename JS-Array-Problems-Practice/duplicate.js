// To remove the duplicate names from the array :--
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const singleName = names[i];
        if(unique.includes(singleName) === false){
            unique.push(singleName);
        }
    }
    return unique;
}
const names = ['Abul', 'Babul', 'Kabul', 'Cabul', 'Dabul', 'Ebul', 'Mabul', 'Babul', 'Abul', 'Kabul','Mabul', 'Nabul']
const unique = removeDuplicate(names);
console.log(unique);