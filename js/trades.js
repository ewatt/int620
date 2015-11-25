$(document).ready(function(){
	$('a#buttonTrades').click(function(){
		$('a#buttonTrades').parent().toggleClass('active');
		$('div#pageTrades').toggle();
	});
});