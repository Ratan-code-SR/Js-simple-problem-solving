/**
 * variable
 * var
 * let 
 * const 
 */
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// let mark = 90;
// if (mark >= 90 && mark <= 100) {
//     console.log('A+');
// }
// else if (mark >= 80 && mark <= 89) {
//     console.log('B');
// }
// else if (mark >= 70 && mark <= 79) {
//     console.log('C');
// }
// else if (mark >= 60 && mark <= 69) {
//     console.log('D');
// }
// else {
//     console.log("F");
// }

// const result = mark >= 90 && mark <= 100 ? 'A+' :
//     mark >= 70 && mark <= 79 ? "B" :
//         mark >= 70 && mark <= 79 ? "C" :
//             mark >= 60 && mark <= 69 ? "D" :
//                 "F";

//                 console.log(result);
/* -------------------------------------------- */
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// let score = 10;
// if (score >= 80) {
//     console.log("Go for lunch");
// }
// else {
//     if (score >= 60) {
//         console.log("Good luck see you again...!");
//     }
//     else if (score >= 40) {
//         console.log("massage unseen!!!");
//     }
//     else {
//         console.log("Block");
//     }
// }

// const result = score >= 80 ? "Go for lunch" :
//     score >= 60 ? "Good luck see you again...!" :
//         score >= 40 ? "massage unseen!!!" :
//             "Block";

// console.log(result);

/* -------------------------------------------- */

/* Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const price = 800;
const age = 61;
const isStudent = false;

// if (age < 10) {
//     console.log("You eat free");
// }
// else if (isStudent === true) {
//     const discount = price * 50 / 100;
//     const payment = price - discount;
//     console.log(payment);
// }
// else if (age >= 60) {
//     const discount = price * 25 / 100;
//     const payment = price - discount;
//     console.log(payment);
// }
// else {
//     console.log(price);
// }

const discount = price * 50 / 100;
const payment = price - discount;

// using ternary operator
const result = age < 10 ? "You eat free" :
    isStudent === true ?
        payment : price;
        console.log(result);