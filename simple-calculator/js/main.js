// Listeners
document.querySelector("#setZero").addEventListener("click", setZero);
document.querySelector("#plusThree").addEventListener("click", plusThree);
document.querySelector("#plusNine").addEventListener("click", plusNine);
document.querySelector("#minusTwo").addEventListener("click", minusTwo);
document.querySelector("#timesTwo").addEventListener("click", timesTwo);

// Element to change
let result = document.querySelector("#result");
let body = document.querySelector("body");

// Initialize counter
let counter = 0;

// Function for setZero 
function setZero() {
    animateClick("#setZero");
    counter = 0;
    result.innerHTML = counter;
    body.style.backgroundColor = "salmon";
}
// Function for plusThree 
function plusThree() {
    animateClick("#plusThree");
    counter += 3;
    result.innerHTML = counter;
    body.style.backgroundColor = "goldenrod";
}
// Function for plusNine 
function plusNine() {
    animateClick("#plusNine");
    counter += 9;
    result.innerHTML = counter;
    body.style.backgroundColor = "darkseagreen";
}
// Function for minusTwo 
function minusTwo() {
    animateClick("#minusTwo");
    counter -= 2;
    result.innerHTML = counter;
    body.style.backgroundColor = "powderblue";
}
// Function for timesTwo 
function timesTwo() {
    animateClick("#timesTwo");
    counter *= 2;
    result.innerHTML = counter;
    body.style.backgroundColor = "burlywood";
}

// Click animation
function animateClick(id) {
    let element =  document.querySelector(id);
    element.style.transform = "scale(1.05)";
    window.setTimeout(function() {element.style.transform = "scale(1.0)";}, 50);
}
