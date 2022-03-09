// Click animation
function animateClick(id) {
    element =  document.querySelector(id);
    element.style.transform = "scale(1.05)";
    window.setTimeout(function() {element.style.transform = "scale(1.0)";}, 50);
}

// Emphasis animation
function emphasis(id) {
    element =  document.querySelector(id);
    window.setInterval(function() {element.style.transform = "scale(1.5)";}, 1000);
    window.setInterval(function() {element.style.transform = "scale(1.0)";}, 2000);
}

// Generate random number between two numbers
function getRandomFromInterval(min, max) {
    return Math.random() * (max - min) + min;
  }