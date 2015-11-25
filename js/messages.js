$(document).ready(function(){
	$('.nav li').click(function(){
		$('.nav').find('.active').toggleClass('active');
	});
	$('a#buttonMessages').click(function(){
		//$('.nav').find('active').toggleClass('active');
		$(this).parent().parent().find('.active').toggleClass('active');
		$(this).parent().toggleClass('active');
		$('div#pageMessages').toggle();
	});
});