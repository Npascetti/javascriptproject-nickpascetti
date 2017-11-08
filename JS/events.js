var value = parseInt(document.getElementById('number').value, 10);

function incrementValue()
{
	value = isNaN(value) ? 0 : value;
	value++;
		if (value < 10) {
			document.getElementById('number').value = value + ' puns';
		} else if (value >= 10 && value < 25) {
			document.getElementById('number').value = value + ' puns';
			document.getElementById('punEncourage').innerHTML = 'Keep those puns coming!';
		} else if (value >= 25 && value < 50) {
			document.getElementById('number').value = value + ' puns';
			document.getElementById('punEncourage').innerHTML = 'Holy shit that\'s alot of puns!';
		} else if (value >= 50) {
			document.getElementById('number').value = value + ' puns';
		}

}

function audioTrigger() {
	document.createElement()
}