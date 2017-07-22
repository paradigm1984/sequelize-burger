

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT,
	burger_name VARCHAR(55) NOT NULL,
    eaten BOOLEAN default false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
