// Task-1:
// Count how many times a string has the letter a

function countALetter(texts) {
    let sum = 0;
    let target = 'a';
    if(typeof texts !== 'string'){
        return 'please provide string';
    }

    for (const text of texts) {
        if (target === text.toLowerCase()) {
            sum++;
        }
        else {
            return 0;
        }
    }
    return sum;

}
console.log(countALetter('my name A is ratan chakma'));
// console.log(countALetter(122));

