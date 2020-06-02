// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)

//First Generator
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]; // use destructuring to assign values
    while (true) { // we write while true loops all the time, run forever
        yield result;
        result = val1 + val2;
        [val1, val2] = [val2, result];
    };
};

// let myFibs = fibs();
// let count = 2;
// while (count --> 0) { // countdown, there is no '-->' operator in JS, it's like count -- > 0
//     console.log(`Next fib: ${myFibs.next().value}`);
// }


// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.

function* evenFibs() {
    for (let fib_num of fibs()) {
        if (fib_num % 2 === 0) {
            yield fib_num;
        };
    };
};

// Use the generators to print out the first 6 even Fibonacci numbers.

let myFibs = evenFibs();
let count = 6;
while (count --> 0) {
    console.log(`Fib Number: ${myFibs.next().value}`);
}
