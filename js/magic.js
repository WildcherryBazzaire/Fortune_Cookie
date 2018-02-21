var fortuneDisplay = document.getElementById("fortune");
var prevFortune = document.getElementById("previousContainer");
var prev = [];
var middlePig = [
	"You will reach the Bardo sooner then everybody else", 
	"Someone will share your Rendezvous", 
	"You will become best friends with Dylan Klebold & Eric Harris", 
	"A invitaton from the family to be spared from Helter Skelter", 
	"Gnomes of Zurich will turn green with Envy for you",
	"Good Scoring Porn will come on your recommended feed",
	"SCUM Manifesto 2 will come to your owning before anybody else",
	"Your pretty ones will avoid being on year of the fire horse",
	"Alliances with you and Animal Farm will be better bonded",
	"NASA will finally discover that Earth is a Cube and Time itself is also Cubed",
	"You will live in the cleanest parts with the Collyer Brothers",
	"Position in the Monster Raving Looney Party Will be Given to you",
	"Charles Manson will come back to life",
	"John Gotti says Hello!",
	"Martin Shkreli will discount your next paid prescriptions",
	"Benjamin Disraeli will make you into a small Man"
	] 
var timed = middlePig.length-1;
var reset = document.getElementById("resets").childNodes;

console.log(middlePig.length);

var shuffle = function(array) { //Fisher Yates Shuffle
	var a,b,c;
	for(a= array.length-1; a > 0; a--) { //loops through array
		b = Math.floor(Math.random() * (a+1));
		c = array[a]; //temp holder
		array[a] = array[b]; //replaces index a in array with random b
		array[b] = c; //restores index a at random index b
	}
	return array;
}

shuffle(middlePig);

var fortune = function(size) { //zero=1 fortune and one=5 fortunes
	if(timed === 0){
		reset[1].innerHTML += ".";
		shuffle(middlePig);
		timed = middlePig.length-1;
	}
	
	switch(size){
		case 1:  
			fortuneDisplay.innerHTML = middlePig[timed];
			timed -= 1;
		break;
		
		case 4:
			fortuneDisplay.innerHTML = " ";
			for(var i=middlePig.length-1; i > 0; i--) {
				console.log("looping");
				fortuneDisplay.innerHTML += middlePig[i] + "</br>";
			}
			timed = 0;
	}
	
	prev.splice(0,0,fortuneDisplay.innerHTML); //adds to the previous fortunes array	
	if(prev.length !== 1) { //shows the previous fortunes and creates a new p element for it
		var keep = document.createElement("P"); 
		keep.innerHTML = prev[1];
		prevFortune.insertBefore(keep,prevFortune.firstChild);
	}
} 