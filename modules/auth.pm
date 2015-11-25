package auth;

use CGI;

our $cgi;

sub new {
	my $class = shift;
	my $self = {};

	$cgi = new CGI;

	unless ( $self->('sessID') = $cgi->cookie('sessID') ) {
		$self->{'sessID'} = $$ . time;
		print "Set-cookie: " . $cgi->cookie('sessID', $self->('sessID') ) . "\n";
	}

	bless( $self, $class );
	return $self;
}

sub validate {
	my $self = shift;

	if ( check_authorization($self) == 0 ) {
		# authorized
		return 0;
	}
	
	# show login
	display_login;
	
	return 1;
}


sub check_authorization {
	my $self = shift;
	
	if ( my $session = $self->('db')) {
		#code
	}
	
	
	return 1;
}


sub check_credentials {
	my $self = shift;
	
	return 1;
}


sub add_authorization {
	my $self = shift;
	
	return 1;
}


sub display_login_prompt {
	my $self = shift;
	
	return 1;
}

1;
