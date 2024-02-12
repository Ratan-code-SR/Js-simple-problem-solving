
// Task-5:
// Capitalize Every first Letter of each word in a String

function capitalizeFunction(sentence) {
    if (typeof sentence !== 'string') {
        return 'not valid input';
    }
    const words = sentence.split(' ');
    let container = ' ';
    for (const word of words) {
        container += word[0].toUpperCase() + word.toLowerCase().slice(1) + " ";

    }
    return container;
}


console.log(capitalizeFunction("my name is ratan chakma. i am a web developer from bangladesh"));

