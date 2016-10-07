$(document).ready(main);
var lives = 3;
var randominette = Math.floor(Math.random() * 100);
console.log(randominette);


function clickValider(){
	console.log("click");
	var inputNumb = $("#numb").val();
	console.log(inputNumb, typeof(inputNumb));
	if (inputNumb > randominette) {
		$("#display").html("Smaller!");
		lives--;
	}
	else if (inputNumb < randominette) {
		$("#display").html("Higher!");
		lives--;
	}
	else if (inputNumb == randominette)
		$("#display").html("THE PRICE IS RIGHT!");
}

// Fonction principale
function main(){
	$("#lives").html(lives);
	$("#validate").on("click", function(){
		if (lives === 0){
			$("#display").html("You dont have anymore lives! Send money to play");
		}
		else{
			clickValider();
			$("#lives").html(lives);
		}

	});

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.


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

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/
	}