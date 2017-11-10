<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8"/>
		<script type="text/javascript" rel="script" src="JS/events.js" async></script>
		<script type="text/javascript" rel="script" src="JS/baconator.js" async></script>
		<audio id="mySoundClip">
			<source src="audio/cartoon-telephone_daniel_simion.mp3"></source>
			Your browser isn't invited for super fun audio time.
		</audio>
		<audio id="mySoundClip1">
			<source src="audio/front-desk-bells-daniel_simon.mp3"></source>
		</audio>
		<audio id="mySoundClip2">
			<source src="audio/Airhorn-SoundBible.com-975027544.mp3"></source>
		</audio>
		<audio id="mySoundClip3">
			<source src="audio/carelessairhorn.mp3"></source>
		</audio>
	</head>
	<body>
		<form>
			<input type="text" id="number" value="0"/>
			<input id="counterButton" type="button" onclick="incrementValue()" value="Pun Counter" />
		</form>

		<h2>Click the pun counter button every time you make a pun. Have your audio on for a special treat at certain pun milestones.</h2>

		<h1 id="punEncourage"></h1>
		<div id="div1">The text above ^^^^^^ is created on page load, but I'm not.</div>

		<h2>Click on the paragraph below to alter its content.</h2>

		<p id="changeMe" onclick="changeMe()">Every day is taco ipsum tuesday. It’s a wonderful morning for breakfast tacos. It’s a wonderful morning for breakfast tacos. How do you feel about hard shelled tacos? Ooh, with diced onions and a pinch of cilantro. I think I’ve overdosed on tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. I’ve been following that taco truck around all day. 50 cent tacos! I’ll take 30. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.</p>

		<h2>Mouse over to change the color of the paragraph below, and click to change it.</h2>

		<p id="changeMe1" onmouseover="colorChange()" onmouseout="colorRevert()" onclick="fontChange()" ondblclick="changeBack()">CARNITAS!! Give me all the tacos, immediately. Tacos, again? This will be 5 times this week and it’s only Tuesday. Give me all your tacos. Ooh, with diced onions and a pinch of cilantro. How do you feel about hard shelled tacos? Ooh, with diced onions and a pinch of cilantro. It’s a wonderful morning for breakfast tacos. Tacos al pastor made with adobada meat. Tacos, tacos, tacos. Shrimp tacos are tasty tacos! Black or pinto beans? Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins.</p>

		<h2>Click on the paragraph below to highlight, double click to unhighlight.</h2>

		<p id="changeMe2" onclick="highlightYellow()" ondblclick="backgroundColorRevert()">It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business. If you were a taco, would you eat yourself? CARNE ASADA!! Give me all the tacos, immediately. BARBACOA!! How do you feel about hard shelled tacos? Burritos are very tasty. Give me all your tacos. Burritos are very tasty. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla.</p>

		<h2>This text is generated from the bacon ipsum api.</h2>

		<p id="baconapi"></p>

	</body>
</html>