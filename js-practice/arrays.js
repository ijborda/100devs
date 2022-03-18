// Muskeeters
// Write a program that:
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.
let musketeers = ["Athos", "Porthos", "Aramis"]
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}
musketeers.push("D'Artagnan")
musketeers.forEach(movie => console.log(movie))
musketeers.splice(2,1)
for (let movie of musketeers) {
    console.log(movie)
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
let values1 = [3, 11, 7, 2, 9, 10];
console.log(values1.reduce((cum, num) => cum + num))

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
let values2 = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...values2))

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
let words = []
let word = ""
while (true) {
    word = prompt("Enter a word:")
    if (word === "stop") {
        break;
    }
    else {
        words.push(word)
    }
}
console.log(words)