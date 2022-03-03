// Functions
let show = (e) => {
	// Toggle picture
	if (e.target.id == "claireNext") {
		document.querySelector("#claire").classList.toggle("hidden")
	}
	else if (e.target.id == "andiNext") {
		document.querySelector("#andi").classList.toggle("hidden")
	}
	else if (e.target.id == "sharleenNext") {
		document.querySelector("#sharleen").classList.toggle("hidden")
	}	
}

// Listeners
document.querySelector("#claireNext").addEventListener("click", show)
document.querySelector("#andiNext").addEventListener("click", show)
document.querySelector("#sharleenNext").addEventListener("click", show)