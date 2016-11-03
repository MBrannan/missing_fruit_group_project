$(document).ready(function() {
	var totalCash = 100;

	var applePrice = 5;
	var orangePrice = 5;
	var bananaPrice = 5;
	var pearPrice = 5;

	var appleInventory = 0;
	var orangeInventory = 0;
	var bananaInventory = 0;
	var pearInventory = 0;

	var applePriceChange = 0;
	var orangePriceChange	= 0;
	var bananaPriceChange = 0;
	var pearPriceChange	= 0;

	appendToDom();

	function appendToDom() {

		$("h1").text("Total Available Cash: $" + parseFloat(totalCash.toFixed(2)));
		$("#priceApple").text("Average Price: $" + applePrice);
		$("#priceOrange").text("Average Price: $" + orangePrice);
		$("#priceBanana").text("Average Price: $" + bananaPrice);
		$("#pricePear").text("Average Price: $" + pearPrice);

		$("#appleInventory").text(appleInventory);
		$("#orangeInventory").text(orangeInventory);
		$("#bananaInventory").text(bananaInventory);
		$("#pearInventory").text(pearInventory);
	}
	setInterval(function priceChange() {

		changePrices();

		appendToDom();

	}, 15000);

	$('button').on('click', function(){
		var selectedFruit = $(this).parent().attr('id');
		if(selectedFruit == 'apple' && totalCash >= applePrice){
			appleInventory++;
			totalCash -= applePrice;
			appendToDom();
		}
	});

	$('button').on('click', function(){
		var selectedFruit = $(this).parent().attr('id');
		if(selectedFruit == 'orange'&& totalCash >= orangePrice){
			orangeInventory++;
			totalCash -= orangePrice;
			appendToDom();
		}
	});

	$('button').on('click', function(){
		var selectedFruit = $(this).parent().attr('id');
		if(selectedFruit == 'banana' && totalCash >= bananaPrice){
			bananaInventory++;
			totalCash -= bananaPrice;
			appendToDom();
		}
	});

	$('button').on('click', function(){
		var selectedFruit = $(this).parent().attr('id');
		if(selectedFruit == 'pear' && totalCash >= pearPrice){
			pearInventory++;
			totalCash -= pearPrice;
			appendToDom();
		}
	});


	function changePrices() {
		applePriceChange = randomNumber(-50, 50);
		orangePriceChange	= randomNumber(-50, 50);
		bananaPriceChange = randomNumber(-50, 50);
		pearPriceChange	= randomNumber(-50, 50);

		applePrice -= Math.round(applePriceChange) / 100;
		orangePrice -= Math.round(orangePriceChange) / 100;
		bananaPrice -= Math.round(bananaPriceChange) / 100;
		pearPrice -= Math.round(pearPriceChange) / 100;

		applePrice = parseFloat(applePrice.toFixed(2));
		if (applePrice < .50) {
			applePrice = .5
		} else if (applePrice > 9.99) {
			applePrice = 9.99
		}
		orangePrice = parseFloat(orangePrice.toFixed(2));
		if (orangePrice < .50) {
			orangePrice = .5
		} else if (orangePrice > 9.99) {
			orangePrice = 9.99
		}
		bananaPrice = parseFloat(bananaPrice.toFixed(2));
		if (bananaPrice < .50) {
			bananaPrice = .5
		} else if (bananaPrice > 9.99) {
			bananaPrice = 9.99
		}
		pearPrice = parseFloat(pearPrice.toFixed(2));
		if (pearPrice < .50) {
			pearPrice = .5
		} else if (pearPrice > 9.99) {
			pearPrice = 9.99
		}
	}


});


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
