// Is "else" required?
// Ans: No Difference

// Rewrite the function using '?' or '||'
// Tenary (?) version
function checkAge(age) {
    return (age > 18 ? true : confirm('Did parents allow you?'));
}
// Or (||) version
function checkAge(age) {
    return (age > 18 || confirm('Did parents allow you?'));
}

// Write a function calcMin(a,b) which returns the least of two numbers a and b.
function calcMin(a, b) {
    return (a < b ? a : b);
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function calcPow(x, n) {
    if (x < 0 || n < 0) {
        return "Negative base or power not supported";
    }
    else if (x == 0 && n == 0) {
        return undefined;
    }
    else if (x != 0 && n == 0) {
        return 1;
    }
    else {
        for (let i = 0; i < n-1; i++) {
            x *= x;
        }
        return x;
    }
}