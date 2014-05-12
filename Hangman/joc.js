var word;
var mistakes = 0;
var guessedWord = new Array();
var count = 40;
var t;

window.onload = myMain;

function myMain() {
	showButtons();
	showWordLength();
	drawHang(0);
	stopWatch();
	window.addEventListener("keypress", myConnection, false);
}



function stopWatch() {
	document.getElementById("stopwatch").innerHTML = "Timp ramas: " + count + "s";
	count --;

	if (count == -1) {
		document.getElementById("stopwatch").innerHTML = "Timpul a expirat";
		for (i = 0; i < word.length; i ++) {
			var B = document.getElementById('p' + i);
			var newT = document.createTextNode(word[i]);


			if (B.innerHTML == "") {
				B.appendChild(newT);
				B.className = "newstyleRed";
			}

		}

	}
	else {
		t = setTimeout ("stopWatch()", 1000);

	}
}

function myConnection(e) {
	var ck = e.charCode - 32;
	verify(ck);
}

function showButtons() {
	for (i = 65; i <= 90; i ++) {
		var newB = document.createElement('button');
		var newT = document.createTextNode(String.fromCharCode(i));

		newB.appendChild(newT);
		newB.setAttribute('class', 'b1');
		newB.setAttribute('id', 'letter' + i);
		newB.setAttribute('onclick', 'verify('+i+')');

		var theNode = document.getElementById('letterContainer');
		theNode.appendChild(newB);
	}
}


function verify(l) {
	var ok = 0;
	document.getElementById('letter'+ l).style.color = "red";

	for (i = 0; i < word.length; i ++)
		if (word[i] == String.fromCharCode(l)) {
			guessedWord[i] = word[i];

			var B = document.getElementById('p' + i);
			B.className = "newstyle";
			var newT = document.createTextNode(String.fromCharCode(l));

			if (B.innerHTML == "")
				B.appendChild(newT);

			ok = 1;
		}

	if (ok == 0){
		mistakes ++;
		drawHang(mistakes);		
	}
	else {
		var composed = "";
		for (i = 0; i < guessedWord.length; i ++)
			composed += guessedWord[i];
			if (composed == word) {
				var newP = document.createElement('p');
				var newT = document.createTextNode("YOU WON");
				newP.appendChild(newT);
				newP.setAttribute('id', 'result');
				var theNode = document.getElementById("letters");
				theNode.appendChild(newP);
			}
	}

}



function showWordLength () {
	var myWords = new Array ("EXAMEN", "FACULTATE", "RESTANTA", "SESIUNE", "LiCENTA", "MASTER", "CURS", "SEMINAR");
	var random = Math.floor((Math.random()*(myWords.length - 1)) + 0);
	
	word = myWords[random];

	for (i = 0; i <= myWords[random].length - 1; i ++) {
		var newB = document.createElement('button');
		newB.setAttribute('class', 'b2');
		newB.setAttribute('id', 'p' + i);
		var theNode = document.getElementById("word");
		theNode.appendChild(newB);

	}

}

function drawHang(nr) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	switch(nr) {
	case 0:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;

		ctx.moveTo(0,0);
		ctx.lineTo(0,600);
		ctx.stroke();

		ctx.moveTo(0,0);
		ctx.lineTo(80,0);
		ctx.stroke();

		ctx.moveTo(80, 0);
		ctx.lineTo(80, 15);
		ctx.stroke();

		ctx.closePath();

		break;
	

	case 1:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.arc(80,45,30,0, 2*Math.PI)
		ctx.stroke();

		ctx.closePath();

		break;
	
	case 2:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,75);
		ctx.lineTo(80,95);
		ctx.stroke();

		ctx.closePath();
	    
	    break;

	case 3:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,95);
		ctx.lineTo(40,150);
		ctx.stroke();

		ctx.closePath();
	
		break;

	case 4:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,95);
		ctx.lineTo(120, 150);
		ctx.stroke();

		ctx.closePath();

		break;

	case 5:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,95);
		ctx.lineTo(80, 200);
		ctx.stroke();

		ctx.closePath();
		
		break;

	case 6:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,200);
		ctx.lineTo(40, 255);
		ctx.stroke();

		ctx.closePath();	
	
		break;

	case 7:
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;

		ctx.moveTo(80,200);
		ctx.lineTo(120, 255);
		ctx.stroke();

		ctx.closePath();

		var newP = document.createElement('p');
		var newT = document.createTextNode("GAME OVER");
		newP.appendChild(newT);
		newP.setAttribute('id', 'result');
		var theNode = document.getElementById("letters");
		theNode.appendChild(newP);

		for (i = 0; i < word.length; i ++) {
			var B = document.getElementById('p' + i);
			var newT = document.createTextNode(word[i]);


			if (B.innerHTML == "") {
				B.appendChild(newT);
				B.className = "newstyleRed";
			}

		}

		break;

}

}