"use strict";

// Functions
let convert = (e) => {
    console.log(e.key)
    // Check if enter 
    if (e.key == "Enter" || e.key == undefined) {
        // Prevent default
        e.preventDefault();
        // Get input
        let temp = document.querySelector("#celcius").value;
        console.log(temp)
        // Convert
        temp = parseInt(temp) * 9 / 5 + 32 ;
        // Show output
        document.querySelector("#fahrenheit").innerHTML = temp;
    }
} 


// Listener
document.querySelector("#convert").addEventListener("click", convert)
document.querySelector("#celcius").addEventListener("keydown", convert)
