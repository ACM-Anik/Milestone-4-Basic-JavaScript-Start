// To get the string sentence in reverse:-
// ---------------------------------------
function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
       const element = text[i];
       reversed = reversed + element;
    }
    return reversed;
}
const output = reverseString('I am a good student.');
console.log('Reverse string is:', output);



// To reverse the every single words and bring them in a array :--
// -----------------------
function reverseWords(string){
    const words = string.split(' ');
    // [ 'I', 'am', 'a', 'good', 'boy.' ]
    const result = [];
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    return result;
    // jodi joint korate cai
    const getJoin = result.join(' ');
}
const myString = 'I am a good boy.';
const result = reverseWords(myString);
console.log(result);