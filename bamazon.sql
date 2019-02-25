CREATE DATABASE bamazon

USE DATABASE bamazon
CREATE TABLE products (
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(15) NOT NULL,
ptc INT UNSIGNED NOT NULL,
instock INT UNSIGNED NOT NULL,
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY
);

INSERT INTO bamazon(product_name, department_name, ptc, instock)
VALUE("watch", "jewelry", 30, 120);
INSERT INTO bamazon(product_name, department_name, ptc, instock)
VALUE("cuff links", "menswear", 20, 12);
INSERT INTO bamazon(product_name, department_name, ptc, instock)
VALUE("tshirt", "clothing", 15, 30);
INSERT INTO bamazon(product_name, department_name, ptc, instock)
VALUE("clock", "electronics", 50, 3);
INSERT INTO bamazon(product_name, department_name, ptc, instock)
VALUE("toaster", "appliances", 7, 80);