use database pizzastoredb

create table pizza(
 pizza_id varchar(10) not null,
 pizza_name varchar(100) not null,
 pizza_type varchar(100) not null,
    size varchar(10) not null,
    price float not null,
 primary key(pizza_id)
);

create table orders

create table orders(
   order_id int NOT NULL auto_increment,
   pizza_id int not null,
   order_date datetime,
   quantity int NOT NULL,
   price float NOT NULL,
   PRIMARY KEY(order_id),
   CONSTRAINT FK_Pizza FOREIGN KEY (pizza_id) REFERENCES pizza(pizza_id)
);

