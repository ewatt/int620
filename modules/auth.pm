package auth;

use CGI;

our $cgi;

sub new {
	my $class = shift;
	my $self = {};

	$cgi = new CGI;

	unless ( $self->( 'sessID' ) = $cgi->cookie( 'sessID' ) ) {
		$self->( 'sessID' ) = $$ . time;
		print "Set-cookie: " . $cgi->cookie( 'sessID', $self->( 'sessID' ) ) . "\n";
	}

	bless( $self, $class );
	return $self;
}

sub validate {
	my $self = shift;

	if ( check_authorization( $self ) ) {
		# authorized
		return 0;
	}
	# show login
	return 1;
}

1;
