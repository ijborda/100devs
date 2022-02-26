// Set listeners
document.querySelector("#submit").addEventListener("click", readability)

function readability(e) {
    // Prevent submission to server
    e.preventDefault()
    
    // Get text
    text = document.querySelector("#text").value.trim()
    
    // Check text if empty 
    if (text === "") {
        msg = document.querySelector("#msg")
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 3000)
    }
    // Check if text is too short 
    else if (text.match(/[a-zA-Z]/g) === null) {
        msg = document.querySelector("#msg")
        msg.innerHTML = "Invalid text or text is too short."
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
    // Count number of letters
    textLetters = text.match(/[a-zA-Z]/g).length

    // Count number of words
    textWordsMatch = text.match(/\s/g)
    if (textWordsMatch === null) {
        textWords = 1
    }
    else {
        textWords = text.match(/\s/g).length + 1
    }

    // Count number of sentences
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
