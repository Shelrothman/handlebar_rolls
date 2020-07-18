-- write queries that do the following:
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:


-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean. 

CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE rolls
(
	id int NOT NULL AUTO_INCREMENT,
	roll_name  varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);