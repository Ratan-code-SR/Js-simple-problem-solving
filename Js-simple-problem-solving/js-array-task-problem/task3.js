/* 
3. Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */
function containerBooks(book) {
    if (!Array.isArray(book)) {
        return "please provide an array";
    }

    if (book.includes('javascript')) { //includes method always return boolean value;
        return 'The element is present here';
    } else {
        return 'The element is not present here';
    }
}

const books = ['bengali', 'english', 'hindi', 'chinese'];
console.log(containerBooks(books));
