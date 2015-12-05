$(document).ready(function(){
	
	$('div#pageLogin').show();
	$('div#pageSignup').show();
	$('input#login-username').focus();
	
	// hide alerts when clicking any div
	$('div').click(function(){
		$('div.alert').hide();
	});
	
	// login
	$("form#formLogin").submit(function() {
		
		// get username
		var username = $('#login-username').val();
		// get password
		var password = $('#login-password').val();
			
		//alert("\nusername="+username+"\npassword="+password+"\n");
		
		// if values are not empty
		if (username && password) {
			$.ajax({
				type: "POST",
				url: "/index.dhtml",
				//contentType: "application/json; charset=utf-8",
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "json",
				
				// send username and password as parameters to perl script
				data: {"username" : username, "password" : password, "login" : "login" },
				
				// if script call was not successful
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					//alert('error-bad-data');
					$('div#loginError').fadeIn();
				}, //error
				// if script call was successful
				// data contains the JSON values returned by the perl script
				success: function(data) {
					if (data.error) { // script returned error
						//alert('error-bad-login');
						$('div#loginInvalid').fadeIn();
					} //if
					else { // login was successful
						//alert('success-login');
						$('nav#loggedOut').hide();
						$('nav#loggedIn').show();
						$('div#loginSuccess').fadeIn();
						$('div.sitepage').hide();
						$('div#pageProfile').show();
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
	
	
	// logout
	$('a#buttonLogout').click(function(){
		$.ajax({
			type: "GET",
			url: "/index.dhtml",
			contentType: "application/x-www-form-urlencoded; charset=utf-8;",
			dataType: "json",
			data: { "logout" : "logout" },
			success: function(){
				window.location.href= '/';
			},
			error: function(){
				alert('error ajax logout function');
				$('div.sitepage').hide();
			}
		});
	});
	
	
	// signup
	$("form#formSignup").submit(function() {
		
		// get username
		var username = $('#signup-username').val();
		// get password
		var password = $('#signup-password').val();
		// get confirmed password
		var confirm = $('#signup-confirm').val();
		
		alert("\nusername="+username+"\npassword="+password+"\nconfirm="+confirm+"\n");
		
		// if values are not empty
		if (username && password && confirm) {
			$.ajax({
				type: "POST",
				url: "/index.dhtml",
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "json",
				
				// send username and password as parameters to perl script
				data: { "username" : username , "password" : password, "confirm" : confirm, "signup" : "signup" },
				
				// if script call was not successful
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert('error-bad-data');
					$('div#signupIncomplete').fadeIn();
				}, //error
				// if script call was successful
				// data contains the JSON values returned by the perl script
				success: function(data) {
					if (data.error) { // script returned error
						alert('error-bad-username');
						$('div#signupInvalid').fadeIn();
					} //if
					else { // signup was successful
						$('div#signupSuccess').fadeIn();
						$('div.sitepage').hide();
						$('div#pageLogin').show();
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

	$('a#buttonSignup').click(function(){
		$(this).blur();
		$('div#pageLogin').hide();
		$('div#pageSignup').fadeIn();
		//$('div#pageLogin').slideUp();
		//$('div#pageSignup').slideDown();
		$('input#signup-username').focus();
	});
	
	$('a#buttonLogin').click(function(){
		$(this).blur();
		$('div#pageSignup').hide();
		$('div#pageLogin').fadeIn();
		//$('div#pageSignup').slideUp();
		//$('div#pageLogin').slideDown();
		$('input#login-username').focus();
	});
	
	$('a.navbutton').click(function(){
		$('.navbar li.active').toggleClass('active');
		$(this).parent().toggleClass('active');
		$(this).blur();
		$('div.sitepage').hide();
	});
	
	$('a#buttonProfile').click(function(){ $('div#pageProfile').show(); });
	
	$('a#buttonSettings').click(function(){ $('div#pageSettings').show(); });
	
	$('a#buttonCollection').click(function(){ $('div#pageCollection').show(); });
	
	$('a#buttonSearch').click(function(){ $('div#pageSearch').show(); });
	
	$('a#buttonTrades').click(function(){ $('div#pageTrades').show(); });
	
	$('a#buttonMessages').click(function(){ $('div#pageMessages').show(); });

	
});
