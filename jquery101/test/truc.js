function  f(r) {
  alert(r);
}
function add(x, y, callback) {
  var result = x + y;
  callback(result);
}




function iLike(pandaType,trend){
	if(trend === "amour") {
		alert("J'aime les pandas " + pandaType);
	}
	else if(pandaType === "mort" && trend == "haine") {
		alert("Satan souhaite la " + pandaType +" de tout les pandas")
	}
	else {
		alert("Je n'aime pasles pandas " + pandaType);
	}
}

$("button").click(function() {
	var pandaType = $(this).data("type");
	var tendance = $(this).data("tendance");
	iLike(pandaType, tendance);
	console.log(tendance);
});
console.log($("tendance"));