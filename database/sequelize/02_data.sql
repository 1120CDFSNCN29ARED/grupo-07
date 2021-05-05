
--
-- Dumping data for table `userCategory`
--

insert into userCategory (id, kind) values (1, 'acolbran0');
insert into userCategory (id, kind) values (2, 'uwaeland1');
insert into userCategory (id, kind) values (3, 'tivushkin2');
insert into userCategory (id, kind) values (4, 'aoels3');
insert into userCategory (id, kind) values (5, 'ctheodore4');
insert into userCategory (id, kind) values (6, 'hslesser5');
insert into userCategory (id, kind) values (7, 'tlidster6');
insert into userCategory (id, kind) values (8, 'dbotfield7');
insert into userCategory (id, kind) values (9, 'cpenhallurick8');
insert into userCategory (id, kind) values (10, 'sgilardone9');

--
-- Dumping data for table `brand`
--

insert into brand (id, kind) values (1, 'shebdon0');
insert into brand (id, kind) values (2, 'bgullan1');
insert into brand (id, kind) values (3, 'mcella2');
insert into brand (id, kind) values (4, 'bely3');
insert into brand (id, kind) values (5, 'eblackaby4');
insert into brand (id, kind) values (6, 'bjepp5');
insert into brand (id, kind) values (7, 'corbell6');
insert into brand (id, kind) values (8, 'eziehms7');
insert into brand (id, kind) values (9, 'kskarr8');
insert into brand (id, kind) values (10, 'aphilcox9');

--
-- Dumping data for table `category`
--

insert into category (id, kind) values (1, 'jmorot0');
insert into category (id, kind) values (2, 'vagastina1');
insert into category (id, kind) values (3, 'mlawrenceson2');
insert into category (id, kind) values (4, 'dgamble3');
insert into category (id, kind) values (5, 'cchurchley4');
insert into category (id, kind) values (6, 'ehillen5');
insert into category (id, kind) values (7, 'mbuckeridge6');
insert into category (id, kind) values (8, 'bbroodes7');
insert into category (id, kind) values (9, 'zhatherleigh8');
insert into category (id, kind) values (10, 'apennini9');


--
-- Dumping data for table `products`
--

insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (1, 'Miel Líquida', 500.50, 'Miel líquida multifloral envasada de forma especial después de ser extraída de colmenares seleccionados sin distorsionar sus cualidades ni sabores mediante procesos industriales. Miel liquida, cristalina de fácil disolución ideal para el uso cotidiano. Valor Energético:64 kcal; Carbohidratos: 16 g; Porción: 20 g (1 cucharada sopera)', 0, '/img/products/miel-beepure.png', 500, 1, 1, 1);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (2, 'Helados de jugo', 294.03, 'mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy', 0, '/img/products/icecream.jpg', 260, 2, 2, 2);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (3, 'Muffins con avena y frutas', 375.7, 'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus', 0, '/img/products/muffins.jpeg', 160, 3, 3, 3);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (4, 'Manteca de coco', 211.56, 'mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin', 0, '/img/products/mantequilla-de-coco.png', 400, 4, 4, 4);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (5, 'Mermelada frutos del bosque', 200.78, 'in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis', 0, '/img/products/mermelada-beepure.png', 245, 5, 5, 5);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (6, 'Hamburguesa de lentejas y arroz', 352.0, 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt', 6, '/img/products/veggie-burger-delitas.png', 300, 6, 6, 6);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (7, 'Aceite neutro de coco', 541.5, 'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros', 0, '/img/products/aceite-coco.png', 380, 7, 7, 7);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (8, 'Pasta de garbanzos', 108.28, 'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu', 0, '/img/products/fideos-garbanzo.png', 120, 8, 8, 8);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (9, 'Leche de almendras cremosa', 264.08, 'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum', 0, '/img/products/leche-almendras.png', 160, 9, 9, 9);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (10, 'Chocolate negro', 233.12, 'vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur', 0, '/img/products/chocolate.png', 360, 10, 10, 10);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (11, 'Crackers sabor Puerro', 123.28, 'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 11, '/img/products/crudencio.png', 120, 11, 11, 11);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (12, 'Harina Integral Orgánica', 70.31, 'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 0, '/img/products/harina-integral.png', 160, 12, 12, 12);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (13, 'Pepas Organicas', 45.65, 'mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum', 0, '/img/products/pepas.png', 120, 13, 13, 13);
insert into products (id, name, price, description, discount, picture, weight, quantity, brand_id, category_id) values (14, 'Barritas de arroz con sabor a coco', 19.27, 'porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 14, '/img/products/barrita-arroz.png', 296.58, 14, 14, 14);



--
-- Dumping data for table `users`
--

insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (1, 'Jed', 'Southey', 'https://robohash.org/harumdelenitiet.png?size=50x50&set=set1', 'jsouthey0@nhs.uk', 'VSkdkU', '412 Florence Parkway', '5597 Pierstorff Alley', 'Sutteridge', 'Jed Southey', '4452', '743-884-1715', '11/28/2020', 1);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (2, 'Kelsey', 'Weekley', 'https://robohash.org/earuminciduntomnis.png?size=50x50&set=set1', 'kweekley1@privacy.gov.au', 'h9FZjEcay4L', '267 Warrior Road', '3 Bay Street', 'Karstens', 'Kelsey Weekley', '546', '447-782-3836', '6/6/2020', 2);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (3, 'Austine', 'McLenahan', 'https://robohash.org/consequaturnonqui.png?size=50x50&set=set1', 'amclenahan2@apple.com', 'PP05dj', '97 American Ash Pass', '377 Larry Road', 'Cottonwood', 'Austine McLenahan', '11', '723-620-1285', '11/13/2020', 3);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (4, 'Radcliffe', 'Celez', 'https://robohash.org/quasquimaiores.png?size=50x50&set=set1', 'rcelez3@photobucket.com', 'L0H5rK', '23149 Burning Wood Crossing', '253 Erie Alley', 'Maple Wood', 'Radcliffe Celez', '03', '486-672-2265', '3/15/2021', 4);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (5, 'Waylon', 'Pepperell', 'https://robohash.org/etindistinctio.png?size=50x50&set=set1', 'wpepperell4@ezinearticles.com', 'F2ygVxW1IS', '23639 Thierer Lane', '51 Clove Lane', 'Northridge', 'Waylon Pepperell', '5', '673-629-6916', '10/11/2020', 5);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (6, 'Levey', 'Livock', 'https://robohash.org/quisfacerelibero.png?size=50x50&set=set1', 'llivock5@godaddy.com', 'R4GKpu', '5 Village Green Circle', '8 Eggendart Drive', 'Hoffman', 'Levey Livock', '5', '438-215-8862', '4/17/2021', 6);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (7, 'Halli', 'Meconi', 'https://robohash.org/enimanimiplaceat.png?size=50x50&set=set1', 'hmeconi6@parallels.com', 'Z3tbgnI', '14392 Anniversary Road', '60360 Stuart Park', 'Division', 'Halli Meconi', '1', '857-975-7148', '12/6/2020', 7);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (8, 'Gawain', 'Capaldo', 'https://robohash.org/quamearumatque.png?size=50x50&set=set1', 'gcapaldo7@ca.gov', 'hWAdwP', '430 Forest Run Junction', '57485 Fremont Park', '2nd', 'Gawain Capaldo', '6694', '553-521-9449', '3/25/2021', 8);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (9, 'Diandra', 'Mudle', 'https://robohash.org/etiurelaboriosam.png?size=50x50&set=set1', 'dmudle8@newsvine.com', '3CbEY1y', '7 Harbort Place', '6780 Pawling Circle', 'Sachs', 'Diandra Mudle', '4', '637-766-8434', '4/21/2021', 9);
insert into users (id, name, surname, picture, email, pass, street, floorLevel, betweenStreet, locality, cp, phone, birthday, usercategory_id ) values (10, 'Maren', 'Braine', 'https://robohash.org/commodirationeminus.png?size=50x50&set=set1', 'mbraine9@jimdo.com', 'iGprGa2LPT', '702 Donald Avenue', '7762 Di Loreto Trail', 'Coleman', 'Maren Braine', '00', '581-498-9889', '10/2/2020', 10);


--
-- Dumping data for table `cart`
--

insert into cart (id, user_id) values (1, 1);
insert into cart (id, user_id) values (2, 2);
insert into cart (id, user_id) values (3, 3);
insert into cart (id, user_id) values (4, 4);
insert into cart (id, user_id) values (5, 5);
insert into cart (id, user_id) values (6, 6);
insert into cart (id, user_id) values (7, 7);
insert into cart (id, user_id) values (8, 8);
insert into cart (id, user_id) values (9, 9);
insert into cart (id, user_id) values (10, 10);


--
-- Dumping data for table `categoryProduct`
--

insert into categoryProduct (id, category_id, product_id) values (1, 1, 1);
insert into categoryProduct (id, category_id, product_id) values (2, 2, 2);
insert into categoryProduct (id, category_id, product_id) values (3, 3, 3);
insert into categoryProduct (id, category_id, product_id) values (4, 4, 4);
insert into categoryProduct (id, category_id, product_id) values (5, 5, 5);
insert into categoryProduct (id, category_id, product_id) values (6, 6, 6);
insert into categoryProduct (id, category_id, product_id) values (7, 7, 7);
insert into categoryProduct (id, category_id, product_id) values (8, 8, 8);
insert into categoryProduct (id, category_id, product_id) values (9, 9, 9);
insert into categoryProduct (id, category_id, product_id) values (10, 10, 10);


--
-- Dumping data for table `productCart`
--


insert into productCart (id, cart_id, product_id) values (1, 1, 1);
insert into productCart (id, cart_id, product_id) values (2, 2, 2);
insert into productCart (id, cart_id, product_id) values (3, 3, 3);
insert into productCart (id, cart_id, product_id) values (4, 4, 4);
insert into productCart (id, cart_id, product_id) values (5, 5, 5);
insert into productCart (id, cart_id, product_id) values (6, 6, 6);
insert into productCart (id, cart_id, product_id) values (7, 7, 7);
insert into productCart (id, cart_id, product_id) values (8, 8, 8);
insert into productCart (id, cart_id, product_id) values (9, 9, 9);
insert into productCart (id, cart_id, product_id) values (10, 10, 10);



