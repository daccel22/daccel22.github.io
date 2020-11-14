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


/** *************************************************************** *
  * Function_5: confirmUser() - unfinished							*
  *																	*
  * - Check whether visitor has the permit to start adventure.  	*
  *																	*
  * --------------------------------------------------------------- */
function viewJSON(what) {
	var URL = what.URL.value;
	function loadJSON(url) {
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET",url,false); // "synchronous” (deprecated because it freezes the page while waiting for a response) *
		xmlhttp.send();
		jsonObj= JSON.parse(xmlhttp.responseText);
		return jsonObj;
	}
	jsonObj = loadJSON(URL);
	jsonObj.onload=generateHTML(jsonObj);
	hWin = window.open("", "Assignment4", "height=800,width=600");
	hWin.document.write(html_text);
	hWin.document.close();
}


function generateHTML(jsonObj) {
	root=jsonObj.DocumentElement;
	html_text="<html><head><title>JSON Parse Result</title></head><body>";
	html_text+="<table border='2'>";
	caption=jsonObj.catalog.title;
	html_text+="<caption align='left'><h1>"+caption+"</h1></caption>";
	planes=jsonObj.catalog.aircraft; // an array of planes
	planeNodeList=planes[0];
	html_text+="<tbody>";
	html_text+="<tr>";
	x=0; y=0;
	// output the headers
	var header_keys = Object.keys(planeNodeList);
	for(i=0;i<header_keys.length;i++)
	{
		header=header_keys[i];
		if(header=="Airbus") { header="Family"; x=120; y=55; }
		if(header=="Boeing") { header="Family"; x=100; y=67; }
		if(header=="seats") header="Seats";
		if(header=="Wingspan") header="Wing Span";
		if(header=="height") header="Height";
		html_text+="<th>"+header+"</th>";
	}
	html_text+="</tr>";
	// output out the values
	for(i=0;i<planes.length;i++) //do for all planes (one per row)
	{
		planeNodeList=planes[i]; //get properties of a plane (an object)
		html_text+="<tr>"; //start a new row of the output table
		var aircraft_keys = Object.keys(planeNodeList);
		for(j=0;j<aircraft_keys.length;j++)
		{
			prop = aircraft_keys[j];
			if(aircraft_keys[j]=="Image"){
				//handle images separately
				html_text+="<td><img src='"+ planeNodeList[prop] +"' width='"+x+"' height='"+y+"'></td>";
			} 
			else {
				html_text+="<td>"+ planeNodeList[prop] +"</td>";
			}
		}
		html_text+="</tr>";
	}
	html_text+="</tbody>";
	html_text+="</table>";
	html_text+= "</bo" + "<dy> </html>"; 
}
