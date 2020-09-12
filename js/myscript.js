function printDate() {
			var d = new Date(); 
			document.write("Time ticket: " + d.toLocaleString());
		}
function sayYourName() {
	var name = prompt("What is your name?");
	if(name == null || name.length == 0)
		document.write("<h3>Start your journey here</h3>");
	else
		document.write("<h3>Start your journey here, " + name + "</h3>");
}
function confirmAdventure(form) {
	var msg = "Are you sure you want to start the adventure?\n";
	if(confirm(msg)) {
		window.location.href = "path.html";
	}
	else {
		window.location.href = "index.html";
	}
}
