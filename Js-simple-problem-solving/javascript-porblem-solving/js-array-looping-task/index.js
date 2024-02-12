// array-looping-tasks
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output: ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors.reverse());   //solve this problem;

/* end */

/*
 ========================================

Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:[12, 98, 76, 46]

 ========================================
 */
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const arr = [];
// const ratan = numbers.forEach((value) => {
//     if (value % 2 === 0) {
//         arr.push(value);
//     }

// });
// console.log(arr);
/* end */

/* 
======================================
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik'

======================================
 */
// const  numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let newString = " ";
// for(const num of numbers){
// newString += num;

// }
// console.log(typeof newString);
/* end */
/* 
============================================================
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:'person working hard a am I'
============================================================
 */
// const statement = 'I am a hard working person';

// let arr = statement.split(" ");
// let newArr = [];
// // console.log(arr);

// for (let i = arr.length - 1; i >= 0; i--) {

//   newArr.push(arr[i])
//     // console.log(arr[i]);

// }
// console.log(newArr.join(' '));
const statement = 'I am a hard working person';
let arr = statement.split(" ");
let newString = ' ';
// console.log(arr);
for (let i = arr.length - 1; i >= 0; i--) {
    newString += [arr[i]] + " ";
    // newArr+= " ";
}
console.log(newString);





