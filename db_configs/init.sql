DROP TABLE IF EXISTS investors;
CREATE TABLE investors (
	ID SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	dob VARCHAR(10),
	phone VARCHAR(11),
	address VARCHAR(20),
	city VARCHAR(10),
	state VARCHAR(2),
	zipcode VARCHAR(5));
	
	INSERT INTO investors (first_name, last_name, phone, address, city, state, zipcode)
	VALUES ('John', 'Doe', '12039874562', '0 Broadway', 'Kostroma', 'NY', '10000');
	
	SELECT * FROM investors;