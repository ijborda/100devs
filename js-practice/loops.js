// Carousel
const turnsNumber = prompt("Enter number of turns:");
for (let i = 1; i <= turnsNumber; i++) {
    console.log(i)
}
let i = 1;
while (i <= turnsNumber) {
    console.log(i)
    i++
}

// Parity
const parityStart = prompt("Enter starting number:");
for (let i = parityStart; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

// Input validation
const MAX = 100
const MIN = 50
let number = MAX + 1;
while (number > MAX || number < MIN) {
    number = prompt("Type a number:");
}

// Multiplication table
let number = prompt("Enter a number:")
while (number < 2 || number > 9) {
    number = prompt("Enter a number:")
}
for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number*i}`)
}

// Neither yes nor no
let text = prompt("Enter text:")
while (!(text == "no" || text == "yes")) {
    text = prompt("Enter text:")
}
console.log("Game ended!")

// FizzBuzz
for (let i=1; i<=100; i++) {
    if (i%15 == 0) {
        console.log("FizzBuzz")
    }
    else if (i%3 == 0) {
        console.log("Fizz")
    }
    else if (i%5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}