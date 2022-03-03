// Function 
let showResult = (e) => {
	if (e.target.classList.contains("rose")) {
		document.querySelector("#nikki").classList.toggle("hidden")
	}
	else {
		alert("wrong!")
	}
}

// Listener
choices = document.querySelectorAll(".contestant");
Array.from(choices).forEach(element => {
	element.addEventListener("click", showResult)
});