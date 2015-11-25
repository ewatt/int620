$(document).ready(function(){
	// when loginForm is submitted...
	$("form#loginForm").submit(function() {
		
		// get username
		var username = $('#loginUsername').val();	//.attr('value');
		// get password
		var password = $('#loginPassword').val();	//.attr('value');
			
		alert("\nusername="+username+"\npassword="+password+"\n");
		
		// if values are not empty
		if (username && password) {
			$.ajax({
				type: "GET",
				url: "/index.dhtml",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				
				// send username and password as parameters to perl script
				data: "loginUsername=" + username + "&loginPassword=" + password,
				
				// if script call was not successful
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					$('div#loginError').fadeIn();
				}, //error
				// if script call was successful
				// data contains the JSON values returned by the perl script
				success: function(data) {
					if (data.error) { // script returned error
						$('div#loginInvalid').fadeIn();
					} //if
					else { // login was successful
						$('nav#loggedOut').hide();
						$('nav#loggedIn').show();
						$('div#login').modal('hide');
						$('div#loginSuccess').fadeIn();
					} //else
				} //success
			}); //ajax
		} //if
		else {
			$('div#loginIncomplete').fadeIn();
		} //else
		$('div#loginResult').fadeIn();
		return false;
	});
});
