// Add listeners
document.querySelector("#submit").addEventListener("click", addUser)

function addUser() {
    // Get name and email
    userName = document.querySelector("#name").value
    userEmail = document.querySelector("#email").value

    // Check if empty 
    if (userName === "" || userEmail === "") {
        msg = document.querySelector("#msg")
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 3000)
    }
    else {
        // Add to user list
        user = document.createElement("li");
        user.classList.add("user")
        user.innerHTML = `${userName}: ${userEmail}`
        userList = document.querySelector("#userList")
        userList.appendChild(user)
        // Clear fields
        document.querySelector("#name").value = ""
        document.querySelector("#email").value = ""
    }
}