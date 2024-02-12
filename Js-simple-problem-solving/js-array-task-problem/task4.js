
/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

function checkedIsArray(check) {
    if (Array.isArray(check)) {
        return 'variable is an array';
    } 
    else {
        return 'variable is not an array';
    }

}

const numbers = [23, 56, 78, 65, 43];
const text = 'focus my goal';
console.log(checkedIsArray(numbers));
console.log(checkedIsArray(text));


