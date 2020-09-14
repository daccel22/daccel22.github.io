/** *************************************************************** * 
  * JS file for the home page										*
  *  																*
  * Author: Yi Chen													*
  * Last update: 9/11/2020											*
  * --------------------------------------------------------------- */


/** *************************************************************** *
  * Function_1: sayYourName()										*
  *																	*
  * - Ask visitor her/his name in advance		 					*
  *																	*
  * --------------------------------------------------------------- */
function sayYourName() {
	var name = prompt("What is your name?");
	if(name == null || name.length == 0)
		document.write("<h3>Start your journey here</h3>");
	else
		document.write("<h3>Start your journey here, " + name + "</h3>");
}


/** *************************************************************** *
  * Function_2: printTime()											*
  *																	*
  * - Print the time of arriving in the bottom of website 			*
  *																	*
  * --------------------------------------------------------------- */
function printTime() {
			var d = new Date(); 
			document.write("Time ticket: " + d.toLocaleString());
}


/** *************************************************************** *
  * Function_3: confirmAdventure()									*
  *																	*
  * - Ask visitor politely whether she/he wants to leave home  		*
  *   for adventure.												*
  *																	*
  * --------------------------------------------------------------- */
function confirmAdventure(form) {
	var msg = "Are you sure you want to start the adventure?\n";
	if(confirm(msg)) {
		window.location.href = "path.html";
	}
	else {
		window.location.href = "index.html";
	}
}


/** *************************************************************** *
  * Function_4: confirmUser() - unfinished							*
  *																	*
  * - Check whether visitor has the permit to start adventure.  	*
  *																	*
  * --------------------------------------------------------------- */
function dataHandler(info) {
	var username;
	for(var i = 0; i < info.username.length; i++) {
		if(info.username == username) {
			if(info.password == password)
				goForAdventure();
			else
				printWrongPassword();
		}
	}
	printNUllUsername();
	
}

