// Function expression
function ask(question, yes, no) {
	confirm(question) ? yes() : no()
}
ask(
    "Please confirm transaction", 
    function() { alert("You agreed") },
    function() { alert("You declined") }
)