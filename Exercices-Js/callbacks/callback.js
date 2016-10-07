function add(x,y, callback){
	var result = x + y;

	callback(result);
}

function showResult(result){
	alert(result);
}

$("#foo").click(function(){
	add(3, 5, showResult);
});