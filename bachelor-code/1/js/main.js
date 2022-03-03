// Function
let finalrose = () => {
	// Hide Claire and Sharleen
	document.querySelector("#claire").style.display = "none";
	document.querySelector("#sharleen").style.display = "none";
}

// Listener
document.querySelector("#finalRose").addEventListener("click", finalrose);