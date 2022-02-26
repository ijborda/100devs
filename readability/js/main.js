// Set listeners
document.querySelector("#submit").addEventListener("click", readability)

function readability(e) {
    // Prevent submission to server
    e.preventDefault()
    
    // Get text
    text = document.querySelector("#text").value
    
    // Check text if empty 
    if (text === "") {
        msg = document.querySelector("#msg")
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 3000)
    }
    else {
        // Calculate readability score
        readabilityScore = calcReadability(text)

        // Show readability result
        result = document.querySelector("#result")
        result.innerHTML = readabilityScore;
    }
}

function calcReadability(text) {
    console.log(text)
    // Count number of letters, words, and sentences
    textLetters = text.match(/[a-zA-Z]/g).length
    textWords = text.match(/\s/g).length + 1
    textSentenceMatch = text.match(/[!.?]/g)
    if (textSentenceMatch === null) {
        textSentence = 1
    }
    else {
        textSentence = text.match(/[!.?]/g).length
    }

    // Calculate Coleman-Liau index
    lValue = textLetters / textWords * 100
    sValue = textSentence / textWords * 100
    index = Math.round(0.0588 * lValue - 0.296 * sValue - 15.8)

    // Return result
    if (index >= 16) {
        return ("Grade 16+")
    }
    else if (index < 1) {
        return ("Before Grade 1")
    } 
    else {
        return (`Grade ${index}`)
    }
}
