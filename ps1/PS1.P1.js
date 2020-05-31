// For these problems, you’ll need to both write the function (and any helper functions you
// require), and also a line or two that executes the function with sample input, printing the result
// on the console. You’ll also need to dig around to find ways to solve them; for example, when
//     working with strings, take a look at the docs for the String library to get ideas of what can be
// done. The ‘official’ docs are at developer.mozilla.org. Most solutions require chaining a few
// functions.
//
// Note: For each problem, write your solution using ‘fat arrow’ (=>) notation.

// Example 1
// Write a function that returns the largest integer of an array of integers
// const biggie = items => Math.max(...items);
// console.log(`Biggest int is: ${biggie([4,8,1,4,3,9,2])}`)
//
// For each problem below, include a test suite using mocha/chai that performs at least three unit
// tests on each function. For this assignment, place all of the suits into a single file.

//Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
// your function using the string ‘supercalifragilisticexpialidocious’.

const alphabeticalOrder = (string) => {
    const regex = /[a-zA-Z]+/g;
    const str = string.match(regex);
    return str.join('').split('').sort().join('');
}

console.log(alphabeticalOrder('supercalifragilisticexpialidocious'));

module.exports = {alphabeticalOrder};