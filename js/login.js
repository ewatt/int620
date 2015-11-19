$(document).ready(function(){
	// when loginForm is submitted...
	$("form#loginForm").submit(function() {
		// get username
		var username = $('#username').val();	//.attr('value');
		// get password
		var password = $('#password').val();	//.attr('value');
			
		//alert(username);
		//alert(password);
		
		// if values are not empty
		if (username && password) {
			$.ajax({
				type: "GET",
				url: "/index.dhtml",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				
				// send username and password as parameters to perl script
				data: "username=" + username + "&password=" + password,
				
				// if script call was not successful
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					$('div#loginResult').append("responseText: " + XMLHttpRequest.responseText
						+ ", textStatus: " + textStatus
						+ ", errorThrown: " + errorThrown);
					$('div#loginResult').addClass("error");
				}, //error
				// if script call was successful
				// data contains the JSON values returned by the perl script
				success: function(data) {
					if (data.error) { // script returned error
						$('div#loginResult').append("data.error: " + data.error);
						$('div#loginResult').addClass("error");
					} //if
					else { // login was successful
						$('form#loginForm').hide();
						$('div#loginResult').append("data.success: " + data.success
							+ ", data.userid: " + data.userid);
						$('div#loginResult').addClass("success");
					} //else
				} //success
			}); //ajax
		} //if
		else {
			$('div#loginResult').append("Enter username and password");
			$('div#loginResult').addClass("error");
		} //else
		$('div#loginResult').fadeIn();
		return false;
	});
});
