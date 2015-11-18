CREATE DATABASE db_access;
GRANT ALL ON `db_access`.* TO `db_user`@`localhost` IDENTIFIED BY 'db_pass';
FLUSH PRIVILEGES;
COMMIT;