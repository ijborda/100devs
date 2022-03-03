// Function
let yell = () => {
  // get inputs
  let firstname = document.querySelector("#firstName").value;
  let firstMiddle = document.querySelector("#firstMiddle").value;
  let lastMiddle = document.querySelector("#lastMiddle").value;
  let lastName = document.querySelector("#lastName").value;
  // show output
  let printHere = document.querySelector("#placeToYell")
  let msg = `${firstname} ${firstMiddle} ${lastMiddle} ${lastName}` 
  printHere.innerHTML = msg
  // Shout
  setInterval(() => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
  }, 1000)
  
}

// Set listeners
document.querySelector("#yell").addEventListener("click", yell)
