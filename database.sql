-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shoppingList (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"quantity" FLOAT,
	"unit" VARCHAR(20),
	"isPurchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO shoppinglist ("name", "quantity", "unit")
VALUES ('Bananas', 2, 'Bunches');

INSERT INTO shoppinglist ("name", "quantity", "unit")
VALUES ('Curry Paste', 1, 'Jar');

INSERT INTO shoppinglist ("name", "quantity", "unit", "isPurchased")
VALUES ('Potatoes', 5, 'Pounds', true);
