// let text = "my name is ratan chakma . i am 21 years old. I'm a teacehr";

// console.log(text.search(/a/));

// let x = "ratan";
// let y = 4;
// let  sum = x + y ;
// console.log(typeof sum);

// let str = "Mississippi";
// console.log(str.indexOf("i",2));

// const myObject = {
//     a: "",
//     b: 2,
//     c: 3
//   };
//  console.log(myObject.rat);

//   for (let prop in myObject) {
//     console.log(myObject[prop]);
//   }
//   const x = " "
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }

/* ===================================== */
/* ### Task-1: 
Count how many times a string has the letter `a` */

// optional : 
// let word = "HI! Ratan Chakma. How are you?";
// let countA = (word.match(/a/g) || []).length;
// console.log(countA); // Output: 5
/* ===================================== */
// let sentence = "HI! Ratan Chakma. How are you?";
// console.log(sentence.match(/a/g).length);

/* ===================================== */
// ### Task-2: 
// Count how many times a string has the letter `a` or `A`
/* ===================================== */
// let text1 = "My Name is Ratan Chakma. I am eating Apple,Alu.";
// console.log(text.match(/a/gi).length);
// let checked = text.match(/a/gi);
// if (checked !== null) {
//     console.log(checked.length);
// } else {
//     console.log("not found");
// }
/* end */


/* ===================================== */
// ### Task-3: 
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
/* ===================================== */
// let text2 = 'Check whether a string contains all the vowels';
// let checkedVowel = text2.match(/[aeiou]/gi).length;
// console.log(checkedVowel);
/* end */

/* ===================================== */
// ### Task - 4: 
// If a given string has either x,replace x by y.if the given string has X,replace it by Y.
// Hint: You should be able to check whether x or X exists.After that, search online how to replace a character in a string.
/* ===================================== */
// let text2 = 'Check whetheR A stRing contains All the vowels';

// if (text2 !== null) {
//     let replace1 = text2.replace(/A/gi, "a");
//     console.log(replace1);
// }

// else if (text2 !== null) {
//     let replace2 = text2.replace(/R/gi, "r");
//     console.log(replace2);
// }

// else {
//     console.log(text2);
// }
/* end */
/* 
const mySentence = "i am learning web development";
const words = mySentence.split(" "); //split method is retern an array from my sentence;

// console.log(words);
let length = words.length;
for (let i = 0; i <length;  i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // console.log(words[i]);
   
}
console.log(words.join(' '));

// done the work;
 */

// let num = [34,56,75,"53", "rtif 45"];

// let sum = 0;
//  for(let i=0; i<num.length; i++){
//     const intigerNumber = parseInt(num[i])
//     // sum = sum + intigerNumber;
//     if(!isNaN(intigerNumber)){
//         sum = sum + intigerNumber;
//     }
//  }
//  console.log(sum);








/*  */
const mySentence = "i am learning web development";
let newArray = mySentence.split(' ');


for (let i = 0; i < newArray.length; i++) {
console.log( newArray[i]);
    newArray[i] = newArray[i][0].toUpperCase() + newArray[i].slice(1);


}
console.log(newArray.join(' '));














/* ===================================== */

/* ===================================== */
/* ===================================== */

/* ===================================== */









