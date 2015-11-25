$(document).ready(function(){
	$('a#buttonSettings').click(function(){
		$('a#buttonSettings').parent().toggleClass('active');
		$('div#pageSettings').toggle();
	});
});