function toDecreaseFont() { //Уменьшение шрифта

	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '46')	$('.header>h1').css('font-size', '44px');
	if (newSize == '44')	$('.header>h1').css('font-size', '42px');
	if (newSize == '42')	$('.header>h1').css('font-size', '40px');

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	$('.header>h2').css('font-size', '34px');
	if (newSize == '34')	$('.header>h2').css('font-size', '32px');
	if (newSize == '32')	$('.header>h2').css('font-size', '30px');
	
	fontSize = $('.result_table td').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	$('.result_table td').css('font-size', '24px');
	if (newSize == '24')	$('.result_table td').css('font-size', '22px');
	if (newSize == '22')	$('.result_table td').css('font-size', '20px');

	fontSize = $('.switch_name').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('.switch_name').css('font-size', '20px');
	if (newSize == '20')	$('.switch_name').css('font-size', '18px');
	if (newSize == '18')	$('.switch_name').css('font-size', '16px');

	fontSize = $('tbody select').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('tbody select').css('font-size', '20px');
	if (newSize == '20')	$('tbody select').css('font-size', '18px');
	if (newSize == '18')	$('tbody select').css('font-size', '16px');

	fontSize = $('tbody select option').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('tbody select option').css('font-size', '20px');
	if (newSize == '20')	$('tbody select option').css('font-size', '18px');
	if (newSize == '18')	$('tbody select option').css('font-size', '16px');

	fontSize = $('.glyphicon').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	$('.glyphicon').css('font-size', '24px');
	if (newSize == '24')	$('.glyphicon').css('font-size', '22px');
	if (newSize == '22')	$('.glyphicon').css('font-size', '20px');

	fontSize = $('a.next_button').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('a.next_button').css('font-size', '18px');
	if (newSize == '18')	$('a.next_button').css('font-size', '16px');
}