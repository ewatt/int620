$(document).ready(function(){
	// when signupForm is submitted...
	$("form#signupForm").submit(function() {
		
		// get username
		var username = $('#signupUsername').val();	//.attr('value');
		// get password
		var password = $('#signupPassword').val();	//.attr('value');
		// get confirmed password
		var confirm = $('#signupConfirm').val();
		
		//alert("\nusername="+username+"\npassword="+password+"\nconfirm="+confirm+"\n");
		
		// if values are not empty
		if (username && password && confirm) {
			$.ajax({
				type: "GET",
				url: "/index.dhtml",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				
				// send username and password as parameters to perl script
				data: "signupUsername=" + username + "&signupPassword=" + password + "&signupConfirm=" + confirm,
				
				// if script call was not successful
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					$('div#signupError').fadeIn();
				}, //error
				// if script call was successful
				// data contains the JSON values returned by the perl script
				success: function(data) {
					if (data.error) { // script returned error
						$('div#signupInvalid').fadeIn();
					} //if
					else { // signup was successful
						$('div#signup').modal('hide');
						$('div#signupSuccess').fadeIn();
					} //else
				} //success
			}); //ajax
		} //if
		else {
			$('div#signupIncomplete').fadeIn();
		} //else
		$('div#signupResult').fadeIn();
		return false;
	});
});
