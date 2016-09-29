$("#submit").click(function() {
	var a = parseInt($("#input-1").val(), 10);
	var b = parseInt($("#input-2").val(), 10);
	var display = 0;

	if ($("#operator option:selected").val() == "x") {
		console.log(multiply(a, b), "test");
	}
	if ($("#operator option:selected").val() == "+") {
		console.log(add(a, b), "test");
	}
	if ($("#operator option:selected").val() == "-") {
		console.log(minus(a, b), "test");
	}
	if ($("#operator option:selected").val() == "/") {
		console.log(division(a, b), "test");
	}
	$("#result").text

});

function add(a,b) {
	return(a + +b);	
}

function division(a,b) {
	return(a / b);
}

function minus(a,b) {
	return(a - b);
}

function multiply(a,b) {
	return(a * b);
}
/*var grr = $("select");
console.log(grr);
console.log($("#operator option:selected").val());*/
/*		console.log(parseInt($("#input-2").val(), 10));*/