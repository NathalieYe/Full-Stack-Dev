// Write a function that accepts two input parameters: a string, and a function. The function
// should execute the passed function with the passed string and return the result.

const addStrToFunc = (str, func) => {
    return func(str);
}

//Expression 1
// Next, write two expressions that call this function. For the first, pass the string
// ‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
// fragments of the input string broken on the character ‘c’. For the input string
// ‘supercalifragilisticexpialidocious’, you should get
// [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]

const lambda = (string) => {
    const regex = /(?=c)/g;
    return (string.split(regex));
}
// console.log(lambda('supercalifragilisticexpialidocious'));

console.log(addStrToFunc('supercalifragilisticexpialidocious', lambda));


//Expression 2
// For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
// replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
// string, the modified string, the total number of As in the modified string, and the overall length
// of the modified string:
// {
// 	 	 originalString: xxx,
// 	 	 modifiedString: xxx,
// 	 	 numberReplaced: xxx,
// 	 	 length:		 xxx,
// }
// Print the data from the returned object on the console.
// Note that in your test file, you’ll probably need to write a simple decorator function to pass along with your tests.

const lambda2 = (string) => {
    const originalString = string;
    const modifiedString = string.replace(/a/g, 'A');
    const numberReplaced = (modifiedString.match(/A/g) || []).length;
    const length = modifiedString.length;
    const object = {
        originalString: originalString,
        modifiedString: modifiedString,
        numberReplaced: numberReplaced,
        length: length
    };
    return object;
};

// console.log(lambda2('supercalifragilisticexpialidocious'));
console.log(addStrToFunc('supercalifragilisticexpialidocious', lambda2));

module.exports = {addStrToFunc, lambda, lambda2};