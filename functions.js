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

// Randomly shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
// Get frequency table from array, return object
function getFreqTable(data) {
   return data.reduce( (freq, current) => {
        if (current in freq) {
          freq[current] += 1
        } else {
          freq[current] = 1
        }
        return freq
      }, {})
}

// Linked list class
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

// Linked list to array
function listToArray(list) {
  return list ? [list.data, ...toArr(list.next)] : []
}

// Array to linked list
function arrayToList(array) {
  if (!array) return null;
  var head = new Node(array[0]);
  var prev = head;
  for (var i = 1; i < array.length; i++) {
    var curr = new Node(array[i]);
    prev.next = curr;
    prev = curr;
  }
  return head;
}