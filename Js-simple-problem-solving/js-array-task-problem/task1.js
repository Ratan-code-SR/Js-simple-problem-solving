/*
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array 
*/

function findElement(fruits) {
    if (!Array.isArray(fruits)) {
        return "please provide an array";
    }
    fruits[1] = 'jambura';
    return fruits;
}

const fruits = ['apple', 'banana', 'mango', 'watermelon', 'guava'];
console.log(fruits[2]);
console.log(findElement(fruits));


