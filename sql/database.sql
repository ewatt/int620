CREATE DATABASE db_project;
GRANT ALL ON `db_project`.* TO `username`@`localhost` IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
COMMIT;