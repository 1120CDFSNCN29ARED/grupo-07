create database huerto_db;

use huerto_db;

-- Table `userCategory` --
create table usersCategory(
id int unsigned primary key auto_increment,
kind varchar(60)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `brand` --
create table brands (
id int unsigned primary key auto_increment,
kind varchar(60)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `category` --
create table categories(
id int unsigned primary key auto_increment,
kind varchar(60)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `products` --
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
foreign key (brand_id) references brands(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `users` --
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
userCategory_id int(10) unsigned,
foreign key (userCategory_id) references usersCategory(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `categoryProduct` --
create table categoryProduct(
id int unsigned primary key auto_increment,
category_id int(10) unsigned ,
product_id int(10) unsigned ,
foreign key (category_id) references categories(id),
foreign key (product_id) references products(id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

