// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. Write a function min that takes two arguments and returns their minimum
function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}


// Recursion
// Define a recursive function isEven corresponding to the description below. The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
function isEven(num) {
    if (num === 0) return true
    else if (num === 1) return false
    else if (num < 0) return false
    else return isEven(num - 2)
}


// Bean counting
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(string) {
    return countChar(string, "B")
}
function countChar(string, char) {
    counter = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) counter++      
    }
    return counter
}