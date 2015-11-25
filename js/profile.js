$(document).ready(function(){
	$('a#buttonProfile').click(function(){
		$('a#buttonProfile').parent().toggleClass('active');
		$('div#pageProfile').toggle();
	});
});