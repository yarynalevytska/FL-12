// Your code goes here
let a = +prompt('enter value A for quadratic equation');
let b = +prompt('enter value B for quadratic equation');
let c = +prompt('enter value C for quadratic equation');
let x = 0;
let x1 = 0;
let x2 = 0;
const four = 4;
const two = 2;
let discr = b * b - four * a * c;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (discr === 0) {
    x = (-b + Math.sqrt(discr)) / (two * a);
    console.log(x);
} else if (discr > 0) {
    x1 = (-b + Math.sqrt(discr)) / (two * a);
    x2 = (-b - Math.sqrt(discr)) / (two * a);
    console.log(x1, x2);
} else if (discr < 0) {
    console.log('No solution');
}
