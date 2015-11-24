$(document).ready(function(){
	$('a#logout').click(function(){
		//alert('logout was clicked');
		$.ajax({
			type: "GET",
			url: "/index.dhtml",
			contentType: "application/json; charset=utf-8;",
			dataType: "json",
			data: "logout=1",
			success: function(){
				window.location.href= '/';
			},
			error: function(){
				alert('you broke something. logout.js');
			}
		});
	});
});