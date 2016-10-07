var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
/*
	$("#holder").html("<img></img>");*/
	$("button").click(function() {
		console.log("test");
		var animal = $(this).data("animal");
		console.log(animal);
		animal = species[animal];
		console.log(animal);
		$("#holder").html("<img src=img/"+ animal+"></img>");
	/*	$("img").attr("src","img/" + animal); */	
	});

	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire


	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond 
	à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut
	 src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log 
	et debugger autant que nécessaires ! 
*/
}
$(document).ready(function(){
	main();
});