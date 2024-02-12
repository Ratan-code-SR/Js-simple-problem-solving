
// Task-2:
// Count how many times a string has the letter a or A

function countALetter (texts){
    if(typeof texts !== 'string'){
        return 'Not valid! Please provide string';
    }
    const result = texts.match(/a/gi).length;
    return result;
}

console.log(countALetter("my name is Ratan Chakma . I am A web developer from bangladesh"));
