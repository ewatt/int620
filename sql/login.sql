CREATE TABLE `db_project`.`tbl_plebs` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`pleb` VARCHAR(45) NOT NULL,
	`code` VARCHAR(45) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `id_UNIQUE` (`id` ASC),
	UNIQUE `pleb_UNIQUE` (`pleb` ASC)
);
COMMIT;