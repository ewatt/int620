DROP TABLE IF EXISTS db_project.tbl_messages;
CREATE TABLE db_project.tbl_messages (
	id INT NOT NULL AUTO_INCREMENT,
	sendto VARCHAR(45) NOT NULL,
	sender VARCHAR(45) NOT NULL,
	subject VARCHAR(45) NOT NULL,
	datesent TIMESTAMP NOT NULL,
	message VARCHAR(512) NOT NULL,
	isread BOOLEAN DEFAULT 0,
	PRIMARY KEY (id),
	UNIQUE INDEX id_UNIQUE (id ASC)
);
COMMIT;