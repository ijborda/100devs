// Use strict
"use strict";

// Set listener
document.querySelector("#submit").addEventListener("click", showPokemonSprite)
async function showPokemonSprite() {
    // Get pokemon 
    const pokemon = document.querySelector("input").value

    // Get url
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    // Get sprite
    const response = await fetch(url)
    const data = await response.json()

    // Show pokemon sprite
    if (document.contains(document.querySelector("img"))) {
        document.querySelector("img").remove();
    }
    const img = document.createElement("img")
    img.src = data.sprites.front_default
    const imgdiv = document.querySelector("#imgBox")
    imgdiv.appendChild(img)
}
