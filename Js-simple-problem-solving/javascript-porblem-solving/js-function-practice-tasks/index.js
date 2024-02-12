// ### Task-1
// Take four parameters. Multiply the four numbers and then return the result
// function myFunction(a, b, ...c) {
//     let mul = a * b;
//     for (let x = 0; x < c.length; x++) {
//      mul*=c[x];
//     }
//     return mul;
// }
// let multiply = myFunction(34, 56, 56, 68, 45, 56, 7, 67, 778, 6);

// console.log(multiply);


// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function myFunction (number){
    if(number % 2 === 0){
        return  number/2;
    }
    else{
        return number * 2;
    }
}
console.log(myFunction(10));

