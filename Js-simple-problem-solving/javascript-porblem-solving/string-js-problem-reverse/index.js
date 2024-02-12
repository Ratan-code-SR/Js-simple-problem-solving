
const sentence = "hello ratan chakma, How are you?";
// string reverseing using by for in loop;
// let revers = "";
// for(const letter of sentence){
//     // console.log(letter);
//     revers = letter + revers;
// }
// console.log(revers);


// string reversing using by for loop
// let test = "";
// for(let i = 0; i<sentence.length; i++){
//     // console.log(sentence[i]);
//     test = sentence[i] + test;
// }
// console.log(test);

// shortcurt 
const revers = sentence.split('').reverse().join('');
console.log(revers);