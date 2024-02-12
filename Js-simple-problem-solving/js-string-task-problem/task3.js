// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

function containsVowel(vowel) {
    let container = [];
    let result = vowel.match(/[aeiou]/gi);
    container.push(result);
    console.log(container.toString());


}

console.log(containsVowel('my name is ratan chakma'));