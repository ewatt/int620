#!/bin/perl
# reference: http://www.perlmonks.org/?node_id=251179

# This module is used to load your database credentials while keeping
# them out of your main source code.

package DatabaseConfiguration;

use strict;
use DBI;
require Exporter;
our @ISA = qw(Exporter);
our @EXPORT = qw(ConnectDatabase);

my $DBHOST   = "localhost";
my $DBPORT   = "3306";
my $DBDRIVER = "mysql";
my $DATABASE = "db_access";
my $USERNAME = "db_user";
my $PASSWORD = "db_pass";

sub ConnectDatabase {
	my $dbConnectionInfo = "DBI:$DBDRIVER:$DATABASE;$DBHOST;$DBPORT";
	my $dbConnectionObject = DBI->connect($dbConnectionInfo,$USERNAME,$PASSWORD)
		or die $DBI::errstr;
	return ($dbConnectionObject);	
}

1;
#EOF
