var value = parseInt(document.getElementById('number').value, 10);

function incrementValue() {
	var audio = document.getElementById("mySoundClip");
	var audio1 = document.getElementById("mySoundClip1");
	var audio2 = document.getElementById("mySoundClip2");
	var audio3 = document.getElementById("mySoundClip3");
	value = isNaN(value) ? 0 : value;
	value++;
	if(value < 10) {
		document.getElementById('number').value = value + ' puns';
	} else if(value >= 10 && value < 25) {
		document.getElementById('number').value = value + ' puns';
		document.getElementById('punEncourage').innerHTML = 'Keep those puns coming!';
		if(value === 10) {
			audio.play();
		}
	} else if(value >= 25 && value < 50) {
		document.getElementById('number').value = value + ' puns';
		document.getElementById('punEncourage').innerHTML = 'Holy shit that\'s alot of puns!';
		if(value === 25) {
			audio3.play();
		}
	}
}

	document.body.onload = addElement;

	function addElement() {
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode("I'm created on page load");
		newDiv.appendChild(newContent);

		var currentDiv = document.getElementById("div1");
		document.body.insertBefore(newDiv, currentDiv);
	}


function changeMe() {
	document.getElementById("changeMe").innerHTML = "What happened?";
}

function colorChange() {
	document.getElementById("changeMe1").style.color = "#ff0000";
}

function colorRevert() {
		document.getElementById("changeMe1").style.color = "black";
}

function fontChange() {
		document.getElementById("changeMe1").style.fontFamily = "Comic Sans MS";
		document.getElementById("changeMe1").innerHTML = "OH MY GOD, IT'S HIDEOUS! DOUBLE CLICK AND SAVE ME!";
}

function changeBack () {
		document.getElementById("changeMe1").style.fontFamily = "Arial";
	document.getElementById("changeMe1").innerHTML = "That's better. Thanks!";
}

function highlightYellow() {
		document.getElementById("changeMe2").style.backgroundColor = "yellow";
}

function backgroundColorRevert() {
	document.getElementById("changeMe2").style.backgroundColor = "white";
}
