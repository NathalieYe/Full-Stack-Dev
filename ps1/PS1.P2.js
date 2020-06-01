const e = (expression) => {
    const operator = expression.charAt(1);
    switch(operator) {
        case '+':
            return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
            break;
        case '-':
            return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
            break;
        case '*':
            return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
            break;
        case '/':
            return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
            break;
    };
};
const evaluate = (string) => {
    // const left = string.charAt(0);
    // const right = string.charAt(2);
    // const operator = string.charAt(1);
    return e(string);
};
//
// const expression = '8/3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`);
// console.log(evaluate('8%2')('8%2'));
// console.log(evaluate('8%2'));
module.exports = {evaluate};







//
//case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
// const evaluate = (expression) => {
//     // const left = string.charAt(0);
//     // const right = string.charAt(2);
//     // const operator = string.charAt(1);
//     const expr = expression;
//     const e = () => {
//         const expr = expression;
//         switch(operator) {
//             case '+':
//                 return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
//                 break;
//             case '-':
//                 return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
//                 break;
//             case '*':
//                 return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
//                 break;
//             case '/':
//                 return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
//                 break;
//         };
//     };
//     return e;
// };
// //
// // const expression = '8/3';
// // let operator = evaluate(expression);
// // console.log(`${expression} = ${operator(expression)}`);
// console.log(evaluate('3+5'));
//
// module.exports = {evaluate};




//IGNORE below comments
//Write a function that takes as input each of the following strings in turn:
// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// This function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result
// For example, if the input string is ‘8%3’, return (left, right) => left % right
// Execute the returned function to evaluate and print each expression. For example,
// const expression = '8%3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`)
//
//
// You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
// always the same length). Also, no need to write three tests for each operator, just three for the
// whole problem.

//SOLUTION 1
// const evaluate = (string) => {
//     const e = (str) => {
//         return eval(str);
//     };
//     // const value = eval(string);
//     return e;
// }
//
// const expression = '8%3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`)

//SOLUTION 2
// const getOperator = operator => {
//     switch (operator) {
//         case '+':
//             return (left, right) => left + right;
//             break;
//         case '-':
//             return (left, right) => left - right;
//             break;
//         case '*':
//             return (left, right) => left * right;
//             break;
//         case '/':
//             return (left, right) => left / right;
//             break;
//     };
// };
//
// const evaluate = (string) => {
//     const operator = string.charAt(1);
//
//     return function() {
//         return getOperator(operator);
//     };
// }
//
// const expression = '8/3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`)



// console.log(evaluate('3+5'));

// One way to call it...
// const mathFunction = evaluate('+');
// console.log(`${mathFunction}`);
// console.log(`Value: ${mathFunction(37, 12)}`);


// const getOperator = operator => {
//     switch (operator) {
//         case '+':
//             return (left, right) => left + right;
//             break;
//         case '-':
//             return (left, right) => left - right;
//             break;
//         case '*':
//             return (left, right) => left * right;
//             break;
//         case '/':
//             return (left, right) => left / right;
//             break;
//     };
// };

// SOLUTION 3