// Listeners
document.querySelector("#check").addEventListener("click", check);

// Elements to change
let result = document.querySelector("#result");

// Function for check
function check() {
    animateClick("#check");
    let day = document.querySelector("#day").value.toLowerCase();
    if (day === "tuesday" || day === "thursday") {
        result.innerHTML = "Class Day";
        emphasis("#result");
    }
    else if (day === "saturday" || day === "sunday") {
        result.innerHTML = "Weekend";
        emphasis("#result");
    }
    else if (day === "monday" || day === "wednesday" || day === "friday") {
        result.innerHTML = "Boring Day";
        emphasis("#result");
    }
    else {
        result.innerHTML = "Not a day";
    }
}

// Click animation
function animateClick(id) {
    let element =  document.querySelector(id);
    element.style.transform = "scale(1.05)";
    window.setTimeout(function() {element.style.transform = "scale(1.0)";}, 50);
}

// Emphasis animation
function emphasis(id) {
    let element =  document.querySelector(id);
    window.setInterval(function() {element.style.transform = "scale(1.5)";}, 400);
    window.setInterval(function() {element.style.transform = "scale(1.0)";}, 800);
}