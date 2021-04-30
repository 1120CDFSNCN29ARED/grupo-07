create database huerto_db;

use huerto_db;

create table userCategory(
id int unsigned primary key auto_increment,
kind varchar(5)
);

create table brand (
id int unsigned primary key auto_increment,
kind varchar(30)
);

create table category(
id int unsigned primary key auto_increment,
kind varchar(20)
);


create table products (
id int unsigned primary key auto_increment,
name varchar(200) not null,
price decimal(3,2) unsigned not null,
description text,
discount int unsigned,
picture varchar(500),
weight decimal(4,2) unsigned,
quantity int unsigned,
brand_id int(10) unsigned,
category_id int (10) unsigned,
foreign key (brand_id) references brand(id),
foreign key (category_id) references category(id)
);

create table users (
id int unsigned primary key auto_increment,
name varchar (12) not null,
surname varchar (30),
picture varchar (500),
email varchar(100) not null,
pass varchar (50) not null,
street varchar (20),
floorLevel int unsigned,
betweenStreet varchar (100),
locality varchar(19),
cp int unsigned,
phone int unsigned,
birthday date,
usercategory_id int(2) unsigned,
foreign key (usercategory_id) references usercategory(id)
);


create table cart (
id int unsigned primary key auto_increment,
user_id int(50) unsigned ,
foreign key (user_id) references users(id)
);

create table productCart(
id int unsigned primary key auto_increment,
cart_id int(50) unsigned ,
product_id int(200) unsigned ,
foreign key (cart_id) references cart(id),
foreign key (product_id) references products(id)
);
