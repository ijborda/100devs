// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
let firstName = prompt("Enter first name:")
let lastName = prompt("Enter last name:")
let msg = `Hello, ${firstName} ${lastName}`
alert(msg)


// Final values
// Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
// Result: 2, 10, 102, 30, 40, 10, 10


// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
const VATRATE = .206
let rawPrice = prompt("Enter raw price:")
let finalPrice = rawPrice * (1 + VATRATE)
console.log(finalPrice)


// Variable swapping
// Add the necessary code to swap the values of variables number1 and number2.
let number1 = 5;
let number2 = 3;
let buffer = number1;
number1 = number2;
number2 = buffer;
console.log(number1); // Should show 3
console.log(number2); // Should show 5