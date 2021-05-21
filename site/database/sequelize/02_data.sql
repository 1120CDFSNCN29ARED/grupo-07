
--
-- Dumping data for table `userCategory`
--

insert into userCategory (kind) values ('acolbran0');
insert into userCategory (kind) values ('uwaeland1');
insert into userCategory (kind) values ('tivushkin2');
insert into userCategory (kind) values ('aoels3');
insert into userCategory (kind) values ('ctheodore4');
insert into userCategory (kind) values ('hslesser5');
insert into userCategory (kind) values ('tlidster6');
insert into userCategory (kind) values ('dbotfield7');
insert into userCategory (kind) values ('cpenhallurick8');
insert into userCategory (kind) values ('sgilardone9');
insert into userCategory (kind) values ('tlpepito2');
insert into userCategory (kind) values ('dboporoto7');
insert into userCategory (kind) values ('cpenpatatarick8');
insert into userCategory (kind) values ('sgiltatatane9');
--
-- Dumping data for table `brand`
--

insert into brand (kind) values ('shebdon0');
insert into brand (kind) values ('bgullan1');
insert into brand (kind) values ('mcella2');
insert into brand (kind) values ('bely3');
insert into brand (kind) values ('eblackaby4');
insert into brand (kind) values ('bjepp5');
insert into brand (kind) values ('corbell6');
insert into brand (kind) values ('eziehms7');
insert into brand (kind) values ('kskarr8');
insert into brand (kind) values ('eplotix9');
insert into brand (kind) values ('coedtioll6');
insert into brand (kind) values ('eedtiol7');
insert into brand (kind) values ('kedlotio8');
insert into brand (kind) values ('aajrtiom9');


--
-- Dumping data for table `category`
--

insert into category (kind) values ('postre');
insert into category (kind) values ('snacks');
insert into category (kind) values ('mlawrenceson2');
insert into category (kind) values ('untables y conservas');
insert into category (kind) values ('pastas y harinas');
insert into category (kind) values ('Bebibles e Infusiones');
insert into category (kind) values ('Cereales, Granolas y Frutos secos');
insert into category (kind) values ('Legumbres y Semillas');
insert into category (kind) values ('Congelados');
insert into category (kind) values ('Sin tacc');
insert into category (kind) values ('Sin lactosa');
insert into category (kind) values ('Bajo en sodio');
insert into category (kind) values ('Apto vegano');
insert into category (kind) values ('Orgánico');


--
-- Dumping data for table `products`
--

insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Miel Líquida', 500, 'Miel líquida multifloral envasada de forma especial después de ser extraída de colmenares seleccionados sin distorsionar sus cualidades ni sabores mediante procesos industriales. Miel liquida, cristalina de fácil disolución ideal para el uso cotidiano. Valor Energético:64 kcal; Carbohidratos: 16 g; Porción: 20 g (1 cucharada sopera)', 0, '/img/products/miel-beepure.png', 500, 1, 1, 1);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Helados de jugo', 299, 'mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy', 0, '/img/products/icecream.jpg', 260, 2, 2, 2);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Muffins con avena y frutas', 375, 'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus', 0, '/img/products/muffins.jpeg', 160, 3, 3, 3);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Manteca de coco', 211, 'mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin', 0, '/img/products/mantequilla-de-coco.png', 400, 4, 4, 4);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Mermelada frutos del bosque', 200, 'in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis', 0, '/img/products/mermelada-beepure.png', 245, 5, 5, 5);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Hamburguesa de lentejas y arroz', 352, 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt', 6, '/img/products/veggie-burger-delitas.png', 300, 6, 6, 6);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Aceite neutro de coco', 541, 'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros', 0, '/img/products/aceite-coco.png', 380, 7, 7, 7);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Pasta de garbanzos', 108, 'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu', 0, '/img/products/fideos-garbanzo.png', 120, 8, 8, 8);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Leche de almendras cremosa', 264, 'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum', 0, '/img/products/leche-almendras.png', 160, 9, 9, 9);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Chocolate negro', 233, 'vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur', 0, '/img/products/chocolate.png', 360, 10, 10, 10);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Crackers sabor Puerro', 123, 'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 0, '/img/products/crudencio.png', 170, 11, 11, 11);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Harina Integral Orgánica', 70, 'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 0, '/img/products/harina-integral.png', 110, 12, 12, 12);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Pepas Organicas', 45, 'mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum', 0, '/img/products/pepas.png', 190, 13, 13, 13);
insert into products (name, price, description, discount, picture, weight, quantity, brand_id, category_id) values ('Barritas de arroz con sabor a coco', 19, 'porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 0, '/img/products/barrita-arroz.png', 296, 14, 14, 14);



--
-- Dumping data for table `users`
--

insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Pate', 'Schieferstein', 'https://robohash.org/voluptatumsuntquas.png?size=50x50&set=set1', 'pschieferstein0@java.com', 'fNrxZnB', '10702 Stang Junction', 97, 'Leroy', 'Pate Schieferstein', '346', '2313029664', '2020-11-19', 1);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Adelaide', 'Johnsey', 'https://robohash.org/repellenduseumaspernatur.png?size=50x50&set=set1', 'ajohnsey1@desdev.cn', 'MqKdAo1DmiNs', '4689 Westend Way', 98, 'Arizona', 'Adelaide Johnsey', '2', '1208922824', '2020-10-28', 2);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Cassandry', 'Gasperi', 'https://robohash.org/voluptatemfugaea.png?size=50x50&set=set1', 'cgasperi2@sina.com.cn', 'aDB3llDW', '13 Summer Ridge Junction', 16, 'Sycamore', 'Cassandry Gasperi', '85', '1587593670', '2020-10-19', 3);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Valli', 'Bofield', 'https://robohash.org/nisidictaex.png?size=50x50&set=set1', 'vbofield3@ftc.gov', 'GOxIlQ1p2nWD', '93384 Forest Park', 79, 'Del Sol', 'Valli Bofield', '07255', '1478848964', '2020-07-04', 4);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Elwin', 'Bowerman', 'https://robohash.org/eosidveniam.png?size=50x50&set=set1', 'ebowerman4@jugem.jp', 'uKKpoG2e', '6 Gateway Terrace', 4, 'Victoria', 'Elwin Bowerman', '84', '1487465734', '2021-01-17', 5);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Lemuel', 'Mizen', 'https://robohash.org/voluptasaccusantiumaliquid.png?size=50x50&set=set1', 'lmizen5@etsy.com', 'PNy1N96bGU', '79167 Emmet Lane', 100, 'Sauthoff', 'Lemuel Mizen', '5937', '1522425834', '2020-11-17', 6);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Ramsay', 'Favel', 'https://robohash.org/quassuntat.png?size=50x50&set=set1', 'rfavel6@gov.uk', 'Y8i9pz3s', '48810 Grim Park', 93, 'Hallows', 'Ramsay Favel', '423', '1784314450', '2021-01-31', 7);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Townie', 'Gelly', 'https://robohash.org/ametsintlibero.png?size=50x50&set=set1', 'tgelly7@walmart.com', 'yaVsQqa1Ux', '4 Cherokee Plaza', 45, 'Tennyson', 'Townie Gelly', '6618', '1858817438', '2020-07-31', 8);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Henrik', 'Corkhill', 'https://robohash.org/ipsampariaturquo.png?size=50x50&set=set1', 'hcorkhill8@mtv.com', 'cbOFiN8', '178 Thompson Place', 1, 'Arkansas', 'Henrik Corkhill', '37423', '2098838534', '2021-02-22', 9);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Gaston', 'Geratasch', 'https://robohash.org/quasiabmaxime.png?size=50x50&set=set1', 'ggeratasch9@examiner.com', 'n4gv0gRD', '06 Luster Plaza', 39, 'Warrior', 'Gaston Geratasch', '908', '1864901737', '2020-12-14', 10);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Mauricio', 'Meffen', 'https://robohash.org/sedsedut.png?size=50x50&set=set1', 'mmeffena@lulu.com', 'sPsaqev8rcX', '77 Mccormick Way', 76, 'Lunder', 'Mauricio Meffen', '65', '1105504280', '2020-11-09', 11);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Gabrielle', 'Roelvink', 'https://robohash.org/quisquamquiain.png?size=50x50&set=set1', 'groelvinkb@epa.gov', '4yHpN269d', '46 Goodland Circle', 18, 'Roth', 'Gabrielle Roelvink', '1221', '1822739462', '2020-09-11', 12);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Natal', 'Gilchriest', 'https://robohash.org/omniseligendiquae.png?size=50x50&set=set1', 'ngilchriestc@php.net', 'enYisRW', '896 Fisk Road', 53, 'Reindahl', 'Natal Gilchriest', '22624', '1412345577', '2021-01-26', 13);
insert into users (name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values ('Hakim', 'Metzke', 'https://robohash.org/iustocommodiqui.png?size=50x50&set=set1', 'hmetzked@hp.com', 'Sh7Iy5I', '896 Arizona Pass', 32, 'Cody', 'Hakim Metzke', '02', '1143212742', '2021-04-28', 14);


--
-- Dumping data for table `cart`
--

insert into cart (user_id) values (1);
insert into cart (user_id) values (2);
insert into cart (user_id) values (3);
insert into cart (user_id) values (4);
insert into cart (user_id) values (5);
insert into cart (user_id) values (6);
insert into cart (user_id) values (7);
insert into cart (user_id) values (8);
insert into cart (user_id) values (9);
insert into cart (user_id) values (10);
insert into cart (user_id) values (11);
insert into cart (user_id) values (12);
insert into cart (user_id) values (13);
insert into cart (user_id) values (14);


--
-- Dumping data for table `categoryProduct`
--

insert into categoryProduct (category_id, product_id) values (1, 1);
insert into categoryProduct (category_id, product_id) values (2, 2);
insert into categoryProduct (category_id, product_id) values (3, 3);
insert into categoryProduct (category_id, product_id) values (4, 4);
insert into categoryProduct (category_id, product_id) values (5, 5);
insert into categoryProduct (category_id, product_id) values (6, 6);
insert into categoryProduct (category_id, product_id) values (7, 7);
insert into categoryProduct (category_id, product_id) values (8, 8);
insert into categoryProduct (category_id, product_id) values (9, 9);
insert into categoryProduct (category_id, product_id) values (10, 10);
insert into categoryProduct (category_id, product_id) values (11, 11);
insert into categoryProduct (category_id, product_id) values (12, 12);
insert into categoryProduct (category_id, product_id) values (13, 13);
insert into categoryProduct (category_id, product_id) values (14, 14);

--
-- Dumping data for table `productCart`
--


insert into productCart (cart_id, product_id) values (1, 1);
insert into productCart (cart_id, product_id) values (2, 2);
insert into productCart (cart_id, product_id) values (3, 3);
insert into productCart (cart_id, product_id) values (4, 4);
insert into productCart (cart_id, product_id) values (5, 5);
insert into productCart (cart_id, product_id) values (6, 6);
insert into productCart (cart_id, product_id) values (7, 7);
insert into productCart (cart_id, product_id) values (8, 8);
insert into productCart (cart_id, product_id) values (9, 9);
insert into productCart (cart_id, product_id) values (10, 10);
insert into productCart (cart_id, product_id) values (11, 11);
insert into productCart (cart_id, product_id) values (12, 12);
insert into productCart (cart_id, product_id) values (13, 13);
insert into productCart (cart_id, product_id) values (14, 14);


