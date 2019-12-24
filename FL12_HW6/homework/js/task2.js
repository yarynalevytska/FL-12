// Your code goes here
let a = +prompt('enter value A for triangle sides length');
let b = +prompt('enter value B for triangle sides length');
let c = +prompt('enter value C for triangle sides length');

if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a >= b + c || b >= a + c || c >= a + b) {
    alert('Triangle doesn’t exist');
} else if (a === b && a === c) {
    alert('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}
