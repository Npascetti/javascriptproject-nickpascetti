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
			audio1.play();
		}
	} else if(value >= 50) {
		document.getElementById('number').value = value + ' puns';
		document.getElementById('punEncourage').innerHTML = 'THIS IS INHUMAN! ARE YOU A PUN MACHINE?';
		if(value === 50) {
			audio2.play();
		}
	}
}
	document.body.onload = addElement;

	function addElement() {
		// create a new div element
		// and give it some content
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode("Hi there and greetings!");
		newDiv.appendChild(newContent); //add the text node to the newly created div.

		// add the newly created element and its content into the DOM
		var currentDiv = document.getElementById("div1");
		document.body.insertBefore(newDiv, currentDiv);
	}





