// Set listeners
document.querySelector(".pyro").addEventListener("click", pyro);
document.querySelector(".hydro").addEventListener("click", hydro);
document.querySelector(".anemo").addEventListener("click", anemo);
document.querySelector(".electro").addEventListener("click", electro);
document.querySelector(".cyro").addEventListener("click", cyro);
document.querySelector(".geo").addEventListener("click", geo);

// Function to retain white background in vision boxes
function visionWhiteBackground() {
    // Obtain vision classes
    let visions = document.querySelectorAll(".vision");
    // Set all those classes to white
    for (vision of visions) {
        vision.style.background = "white";
    }
}
// Animation function
function animateClick(selector) {
    element =  document.querySelector(selector);
    element.style.transform = "scale(1.1)";
    window.setTimeout(function() {element.style.transform = "scale(1.0)";}, 50);
}
// Add image function 
function addImage(src) {
    // Delete existing image, if it exist
    let img =  document.querySelector(".favCharacter");
    if (img != null) {
        img.remove();
    }
    // Create image element
    let favCharacter = document.createElement("img"); 
    // Give image element src
    favCharacter.src = src; 
    // Identify where to add the image element
    let favCharacterBox = document.querySelector(".character"); 
    // Append new image element to the selected parent
    favCharacterBox.appendChild(favCharacter); 
    // Style img
    document.querySelector(".character img").classList.add("favCharacter"); 
}

// Define pyro function
function pyro() {
    // Animate click
    animateClick(".pyro");
    // Change background color
    document.querySelector("html").style.background = "rgb(239, 151, 104)";
    visionWhiteBackground();
    // Add image of favorite character

    addImage("assets/diluc.png");
}
// Define pyro function
function hydro() {
    // Animate click
    animateClick(".hydro");
    // Change background color
    document.querySelector("html").style.background = "rgb(107, 222, 232)";
    visionWhiteBackground();
    // Add image of favorite character
    addImage("assets/childe.webp");
}
// Define pyro function
function anemo() {
    // Animate click
    animateClick(".anemo");
    // Change background color
    document.querySelector("html").style.background = "rgb(143, 223, 196)";
    visionWhiteBackground();
    // Add image of favorite character
    addImage("assets/kazuha.png");
}
// Define pyro function
function electro() {
    // Animate click
    animateClick(".electro");
    // Change background color
    document.querySelector("html").style.background = "rgb(158, 91, 197)";
    visionWhiteBackground();
    // Add image of favorite character
    addImage("assets/keqing.webp");
}
// Define pyro function
function cyro() {
    // Animate click
    animateClick(".cyro");
    // Change background color
    document.querySelector("html").style.background = "rgb(177, 231, 228)";
    visionWhiteBackground();
    // Add image of favorite character
    addImage("assets/ganyu.webp");
}
// Define pyro function
function geo() {
    // Animate click
    animateClick(".geo");
    // Change background color
    document.querySelector("html").style.background = "rgb(221, 181, 87)";
    visionWhiteBackground();
    // Add image of favorite character
    addImage("assets/zhongli.webp");
}