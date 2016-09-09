var me = {
	prenom: "Mathias",
	nom: "Ducancel",
	age: 27,
	occupation: "WEB Dev Fullstack JS",
	city: "Carcassonne"
};
/*
function fill()
{
	$("#prenom").html(me.prenom);
	$("#nom").html(me.nom);
	$("#age").html(me.age);
	$("#occupation").html(me.occupation);
	$("#city").html(me.city);
}*/

/*fill();*/

function replace(to_replace)
{
	$("#"+to_replace).html(me[to_replace]);
}
/*
replace('nom');
replace('city');
replace('occupation');
replace('age');
replace('prenom');
replace('age');
*/
/*object.keys(me)
*/
var arr_me = Object.keys(me);
 
 var i = 0;

 while(arr_me[i])
 {
 	replace(arr_me[i])
 	i++;
 }