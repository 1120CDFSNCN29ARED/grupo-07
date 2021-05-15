create database huerto_db;

use huerto_db;

create table userCategory(
id int unsigned primary key auto_increment,
kind varchar(60)
);

create table brand (
id int unsigned primary key auto_increment,
kind varchar(60)
);

create table category(
id int unsigned primary key auto_increment,
kind varchar(60)
);

create table products (
id int unsigned primary key auto_increment,
name varchar(60) not null,
price int unsigned not null,
description text,
discount int unsigned,
picture varchar(200),
weight int unsigned,
quantity int unsigned,
brand_id int(10) unsigned,
category_id int (10) unsigned,
foreign key (brand_id) references brand(id),
foreign key (category_id) references category(id)
);

create table users (
id int unsigned primary key auto_increment,
name varchar (30) not null,
surname varchar (30),
picture varchar (200),
email varchar(100) not null,
pass varchar (50) not null,
street varchar (200),
floorLevel int unsigned,
betweenStreet varchar (100),
locality varchar(30),
cp int unsigned,
phone int(50) unsigned,
birthday date,
usercategory_id int(10) unsigned,
foreign key (usercategory_id) references usercategory(id)
);

create table cart (
id int unsigned primary key auto_increment,
user_id int(10) unsigned ,
foreign key (user_id) references users(id)
);

create table categoryProduct(
id int unsigned primary key auto_increment,
category_id int(10) unsigned ,
product_id int(10) unsigned ,
foreign key (category_id) references category(id),
foreign key (product_id) references products(id)
);

create table productCart(
id int unsigned primary key auto_increment,
cart_id int(10) unsigned ,
product_id int(10) unsigned ,
foreign key (cart_id) references cart(id),
foreign key (product_id) references products(id)
);
