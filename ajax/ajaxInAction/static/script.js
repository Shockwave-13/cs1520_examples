function setup() {
	document.getElementById("theButton").addEventListener("click", makePost, true);
}

function makePost() {
	var httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
			
	httpRequest.onreadystatechange = function() { alertResult(httpRequest) };
	
	httpRequest.open("POST", "/new_item");
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var data;
	data = "one=" + document.getElementById("a").value + "&two=" + document.getElementById("c").value + "&three=" + document.getElementById("c").value;
	
	httpRequest.send(data);
}

function alertResult() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		if (httpRequest.status === 200) {
			alert("Value sent to server!");
		} else {
			alert("There was a problem with the request.");
		}
	}
}

window.addEventListener("load", setup, true);
