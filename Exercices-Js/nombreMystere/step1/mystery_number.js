var randominette = Math.floor(Math.random() * 100);
console.log(randominette);

function the_price_is_right(inputNumb) {
	if (inputNumb > randominette) {
		console.log("Plus petit!")
	}
	if (inputNumb < randominette) {
		console.log("Plus grand!")
	}
	if (inputNumb == randominette)
		console.log("The price IS RIGHT!")	
}