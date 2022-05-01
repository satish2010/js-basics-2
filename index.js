// let number = max(2, 3);
// console.log(number);

// let landscape = isLandscape(1, 2);
// console.log(landscape);

let fizzbuzz = fizzBuzz('a');
console.log(fizzbuzz);

function max(a, b) {
    return (a > b) ? a : b;
}

function isLandscape(width, height) {
    return (width > height);
}

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3) && (input % 5 === 0)) return 'FizzBuzz';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
}