DROP TABLE IF EXISTS investors;
CREATE TABLE investors (
	ID SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	dob VARCHAR(30),
	phone VARCHAR(12),
	address VARCHAR(50),
	city VARCHAR(30),
	state VARCHAR(2),
	zipcode VARCHAR(5));
	
	INSERT INTO investors (first_name, last_name, phone, address, city, state, zipcode)
	VALUES 
	('John', 'Doe', '12039874562', '0 Broadway', 'Kostroma', 'NY', '10000'),
	('Jane', 'Dove', '12039756562', '1 Broadway', 'Kostroma', 'NY', '10001'),
	('Joseph', 'Done', '12088874562', '2 Broadway', 'Kostroma', 'NY', '10002'),
	('Jean', 'Div', '12039872323', '3 Broadway', 'Kostroma', 'NY', '10003'),
	('Jul', 'Dear', '12039994362', '4 Broadway', 'Kostroma', 'NY', '10004');
	
	SELECT * FROM investors;