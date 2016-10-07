$(document).ready(main);




// Fonction principale
function main(){
	$("#validate").on("click", clickValider);

	function clickValider(){
		var randominette = Math.floor(Math.random() * 100);
		console.log(randominette);
		console.log("click");
		var inputNumb = $("#numb").val();
		console.log(inputNumb, typeof(inputNumb));
		if (inputNumb > randominette) {
			$("#display").html("Smaller!");
		}
		if (inputNumb < randominette) {
			$("#display").html("Higher!");
		}
		if (inputNumb == randominette)
			$("#display").html("THE PRICE IS RIGHT!");
	}
}