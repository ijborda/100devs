// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
function printTriangle(height) {
    for (let i = 0; i < height; i++) {
        console.log("#".repeat(i+1) + "\n")
    }
}


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
function printChessboard(size) {
    let halfSize
    let firstPattern
    let secondPattern
    let chessboard = []
    if (size % 2 === 0) {
        halfSize = size/2
        firstPattern = " #".repeat(halfSize)
        secondPattern = "# ".repeat(halfSize)
    } else {
        halfSize = Math.floor(size/2)
        firstPattern = " #".repeat(halfSize) + " "
        secondPattern = "# ".repeat(halfSize) + "#"
    }
    for (let i = 0; i < halfSize; i++) {
        chessboard.push(firstPattern)
        chessboard.push(secondPattern)
    }
    if (size % 2 !== 0) {
        chessboard.push(firstPattern)
    }
    console.log(chessboard.join("\n")) 
}