// Set listeners
document.querySelector("#submit").addEventListener("click", showPow);

// Define showPow
function showPow() {
    // Get inputs
    const base = document.querySelector("#base").value;
    const power = document.querySelector("#power").value;
    // Calculate power
    let answer = calcPow(base, power);
    // Show answer in DOM
    document.querySelector("#answer").innerHTML = answer;
}

// Define calcPow
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