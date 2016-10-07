function iLove(panda, tendance){
	if(tendance === 'amour') {
		alert("J'aime les pandas " + panda);
	} else if (tendance === 'haine') {
		alert('Je hais les pandas '+ panda + 
			', c\'est pour ça que je n\'ouvre jamais la console dev');
	} else {
		alert('what ?!');
	}
}

$(".panda").click(function(){
	var pandaType = $(this).data('type');
	var tendance = $(this).data('tendance');
	console.log(pandaType);
	iLove(pandaType, tendance);
});