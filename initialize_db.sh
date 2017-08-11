#!/bin/sh

echo Host: $1
echo Username: $2
echo Database: $3
echo Password: $4
echo create table
/opt/rh/rh-mysql57/root/usr/bin/mysql -h $1 -u $2 -D $3 -p$4 -P 3306 -e "CREATE TABLE IF NOT EXISTS customer (id int(11) NOT NULL AUTO_INCREMENT, company varchar(200) NOT NULL,name varchar(200) NOT NULL,address text NOT NULL,email varchar(200) NOT NULL,phone varchar(20) NOT NULL,PRIMARY KEY (id)) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;"
echo insert customers
/opt/rh/rh-mysql57/root/usr/bin/mysql -h $1 -u $2 -D $3 -p$4 -P 3306 -e "INSERT INTO customer (id, company, name, address, email, phone) VALUES(1, 'Telstra', 'Nadya Eka', '242 Exhibition Street, Melbourne VIC 3000', 'nadya@telstra.com.au', '(03) 9632 6323'),(2, 'BHP Billiton', 'Amali Petry', '171 Collins Street, Melbourne VIC 3000', 'amalia@bhpbilliton.com', '(03) 9609 3333'),(3, 'NAB', 'Angel Peters ', '800 Bourke Street, Docklands VIC 3008', 'angel@nab.com.au', '13 22 65'),(4, 'RACV', 'George Martin', '550 Princes Highway, Noble Park North VIC 3174', 'gmartin@racv.com.au', '(03) 8832 7980'),(5, 'Coles', 'Frank Faller', '800 Toorak Road, Hawthorn East, VIC 3146', 'ffaller@coles.com.au', '(03) 9829 5111'),(6, 'Australian Red Cross','Andrea Miller', '111 Bourke St, Melbourne VIC 3000', 'amiller@auspost.com.au', '13 13 18'),(7, 'Officeworks', 'Jojn Taylor', '236 E Boundary Rd, Bentleigh East VIC 3165', 'jtaylor@officeworks.com.au', '(03) 8575 1900'),(8, 'Westpac', 'Ariel Fraser', '275 Kent St, Sydney NSW 2000', 'afraser@westpac.com.au', '13 20 32');"
echo COMPLETE

