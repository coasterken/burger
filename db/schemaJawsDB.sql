CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
burger_name varchar(100) NOT NULL,
devoured boolean not null default 0,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);