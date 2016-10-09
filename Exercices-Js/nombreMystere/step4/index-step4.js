$(document).ready(main);
		
var lives = 3;
var max = 0;
var min = 0;
var randominette = 0;
var closeArr;

function clickValider(){
	var inputNumb = parseInt($("#numb").val());

	if ((inputNumb > randominette) && (inputNumb < closeArr[0])){
		$("#display").html("Getting close! but Smaller!");
		lives--;
	}
	else if ((inputNumb < randominette) && (inputNumb > closeArr[1])){
		$("#display").html("Getting close! but Higher!");
		lives--;
	}
	else if (inputNumb === randominette){
		partieGagnee();
	}
	else if (inputNumb > randominette) {
		$("#display").html("Smaller!");
		lives--;
	}
	else if (inputNumb < randominette) {
		$("#display").html("Higher!");
		lives--;
	}
}

function partieGagnee(){
	$("#display").html("THE PRICE IS RIGHT!");
	alert("THE PRICE IS RIGHT!");
}

function demarrerPartie(){
	lives = 3;
	randominette = Math.floor(Math.random() * 100);
	$("#lives").html(lives);
	$("#min").html("0");
	$("#max").html("99");
	$("#display").html("Let's Play!");	

}

function partiePerdue(){
	alert("You don't have anymore lives! You lost!  Press ok to play again" );
}

function getRandomArbitrary(min, max) {
	return (Math.floor(Math.random() * (max - min) + min));
}

function gettingClose(randominette){
	var percent = (randominette * 8) / 100;
	var percentArr = [];
	percentArr[0] = Math.floor(randominette + percent);
	percentArr[1] = Math.floor(randominette - percent);
	return (percentArr);
}

function main(){
	demarrerPartie();
	$("#validate_choice").on("click", function(){
		lives = $("#lives_choice")[0].value;
		max = $("#max_choice").val();
		min = $("#min_choice").val();
		max = parseInt(max , 10);
		min = parseInt(min, 10)
		$("#min").html(min, "min");
		$("#max").html(max, "max");
		$("#lives").html(lives);
		if(max && (min !== undefined)) {
			randominette = getRandomArbitrary(min, max);
			closeArr = gettingClose(randominette);
		}
	});
	
	$("#validate").on("click", function(){
		clickValider();
		if (lives === 0){
			partiePerdue();
			demarrerPartie();
		}
	});
}