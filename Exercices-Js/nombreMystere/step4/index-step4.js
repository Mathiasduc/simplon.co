$(document).ready(main);
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var lives = 3;
	var max = 0;
	var min = 0;
	var randominette = 0;
	var closeArr;

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/
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
	// /Fin == Fonction clickValider == 

		/*- créer une fonction 'demarrerPartie'*/
	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/
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

// Fonction principale
function main(){
	demarrerPartie()
	$("#validate_choice").on("click", function(){
		//l un ou l autre
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
	
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("#validate").on("click", function(){
		clickValider();
		$("#lives").html(lives);
		if (lives === 0){
			partiePerdue();
			demarrerPartie()
		}
	});
	}