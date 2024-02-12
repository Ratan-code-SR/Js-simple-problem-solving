/* 
5.Combining Arrays
Instructions:
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

function concatArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return 'is not array';
    }
    return array1.concat(array2);
}
const array1 = ['ratan', 'kobita', 'lita'];
const array2 = ['sumon', 'kiron', 'mita'];
console.log(concatArray(array1, array2));
console.log(array1);
console.log(array2);  //task 5 completed;
