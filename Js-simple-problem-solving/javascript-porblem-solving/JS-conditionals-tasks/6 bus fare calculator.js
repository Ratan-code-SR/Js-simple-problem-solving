/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const price = 800;
const isStudent = true;
const age = 89;

if (isStudent == true) {
    const discount = price * 50 / 100;
    const pay = price - discount;
    console.log(pay);
}
else if (age >= 60) {
    const discount = price * 15 / 100;
    const pay = price - discount;
    console.log(pay);
}
else {
    console.log("You have pay full fee");
}
