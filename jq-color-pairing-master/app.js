$("input").each(function() {
	$(this).css("background", $(this).data("color"));
});

$("input").on("click", function(){
	if ($("#modify-texte").is(':checked')){
		$('.main').css("color", $(this).data("color"));
	}
	else {
		$("body").css("background", $(this).data("color"));
	}
});