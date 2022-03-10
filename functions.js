// Click animation
function animateClick(id) {
    element =  document.getElementById(id);
    element.style.transform = "scale(1.05)";
    window.setTimeout(function() {element.style.transform = "scale(1.0)";}, 50);
}

// Emphasis animation
function emphasis(id) {
    element =  document.getElementById(id);
    window.setInterval(function() {element.style.transform = "scale(1.5)";}, 1000);
    window.setInterval(function() {element.style.transform = "scale(1.0)";}, 2000);
}

// Generate random number between two numbers
function getRandomFromInterval(min, max) {
    return Math.random() * (max - min) + min;
}

// Make computer speak
function textToSpeech(msg) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(msg))
}

// Copy text in node to clipboard
function textToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}