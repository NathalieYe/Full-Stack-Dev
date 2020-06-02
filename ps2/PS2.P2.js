//Write a generator that is initialized with a sentence and that emits each word of the sentence in
// turn.
// Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”. Hint: Splitting a string returns an Array.

//Solution 1
function* emitWords (sentence = 'All I know is something like a bird within her sang') {
    const arrayOfWords = sentence.split(' ');
    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        yield word;
    };
};

const myWords = emitWords();

const sentence = 'All I know is something like a bird within her sang'
const arrayOfWords = sentence.split(' ');
const arrayOfWords_length = arrayOfWords.length;

let count = arrayOfWords_length;
while (count --> 0) {
    console.log(`Word: ${myWords.next().value}`);
};


//Solution 2: not one word per line
// function* emitWords (sentence = 'All I know is something like a bird within her sang') {
//     const word = sentence.split(' ');
//     while (true) {
//         yield word;
//     };
//
// }
//
// const myWords = emitWords();
// console.log(`Word: ${myWords.next().value}`);



//extra stuff
// let word = arrayOfWords[0];
// while (true) {
//     yield word;
//
// };
