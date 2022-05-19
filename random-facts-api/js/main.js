// Use strict
"use strict";

// Set listener
document.querySelector('#submit').addEventListener('click', showTrivia)

function showTrivia() {
    // Fetch triva and show in DOM
    fetch(`https://asli-fun-fact-api.herokuapp.com`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('#output').innerHTML = data.data.fact
        })
        .catch(err => console.log(`Error: ${err}`))
}
