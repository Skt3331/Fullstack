create database saurav;
use saurav;
create table student1(
rollno Int,
name varchar(30),
age Int);

Insert into student1 values(101,"saurav",32),
(102,"somesh",33);

select * from student1;

create table user(
id int,
Name varchar(30),
Email varchar(60),
Followers Int,
Following Int);

insert into user values(1,"Adam","adam@yahoo.in",123,145),
(2,"Dob","bob123@gmail.com",200,200),
(3,"Casey","casy@email.com",300,306),
(4,"Donald","donald@gmail.com",200,105);

select * from user;

CREATE TABLE all_data_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    varchar_col VARCHAR(255),
    char_col CHAR(10),
    tinyint_col TINYINT,
    smallint_col SMALLINT,
    mediumint_col MEDIUMINT,
    int_col INT,
    bigint_col BIGINT,
    decimal_col DECIMAL(10, 2),
    numeric_col NUMERIC(8, 4),
    float_col FLOAT(8, 4),
    double_col DOUBLE(8, 4),
    date_col DATE,
    datetime_col DATETIME,
    timestamp_col TIMESTAMP,
    time_col TIME,
    year_col YEAR,
    text_col TEXT,
    blob_col BLOB
);

INSERT INTO all_data_types (
    varchar_col,
    char_col,
    tinyint_col,
    smallint_col,
    mediumint_col,
    int_col,
    bigint_col,
    decimal_col,
    numeric_col,
    float_col,
    double_col,
    date_col,
    datetime_col,
    timestamp_col,
    time_col,
    year_col,
    text_col,
    blob_col
) VALUES (
    'varchar data',
    'char data',
    127,
    32767,
    8388607,
    2147483647,
    9223372036854775807,
    123.45,
    1234.5678,
    12.3456,
    123.4567,
    '2024-02-02',
    '2024-02-02 12:34:56',
    CURRENT_TIMESTAMP,
    '12:34:56',
    '2024',
    'text data',
    'blob data'
);

select * from all_data_types;

-- Constraints 


CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20),
    hire_date DATE NOT NULL,
    job_id INT,
    salary DECIMAL(10, 2),
    manager_id INT,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(department_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(employee_id),
    CHECK (salary >= 0)
);

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

INSERT INTO departments (department_name) VALUES ('Human Resources'), ('Finance'), ('IT');

-- Inserting sample data into the employees table
INSERT INTO employees (first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id)
VALUES ('John', 'Doe', 'john.doe@example.com', '123-456-7890', '2024-01-01', 1, 50000.00, NULL, 1),
       ('Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', '2024-02-01', 2, 60000.00, 1, 2),
       ('Michael', 'Johnson', 'michael.johnson@example.com', '555-123-4567', '2024-03-01', 3, 70000.00, 1, 3);

-- Primary key
create table temp(id Int,primary key(id));
-- Foreign key
create table customer(id Int,name varchar(30));
alter table customer add primary key(id);
Create table custq(cust_id int,balance Int,foreign key(cust_id) references customer(id));

-- Create Departments Table
CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

-- Insert some department records
INSERT INTO departments (department_name) VALUES 
('IT'),
('Finance');

-- Create Employees Table
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- Insert some employee records
INSERT INTO employees (first_name, last_name, salary, department_id) VALUES 
('John', 'Doe', 60000.00, 1),
('Jane', 'Smith', 70000.00, 1),
('Michael', 'Johnson', 80000.00, 2);

-- Create Customers Table
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- Insert some customer records
INSERT INTO customers (name, email) VALUES 
('Amit Kumar', 'amit@example.com'),
('Anjali Sharma', 'anjali@example.com'),
('Rahul Gupta', 'rahul@example.com');

-- Create Products Table
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2)
);

-- Insert some product records
INSERT INTO products (product_name, price) VALUES 
('Laptop', 60000.00),
('Mobile Phone', 25000.00),
('Printer', 10000.00);

-- Create Orders Table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Insert some order records
INSERT INTO orders (customer_id, product_id, order_date) VALUES 
(1, 1, '2023-01-01'),
(2, 2, '2023-02-01'),
(3, 3, '2023-03-01');


-- Retrieve all employees whose salary is greater than 50000 and belong to the 'IT' department
SELECT * 
FROM employees 
WHERE salary > 50000 AND department_id = (SELECT department_id FROM departments WHERE department_name = 'IT');

-- Retrieve all customers whose names start with 'A'
SELECT * 
FROM customers 
WHERE name LIKE 'A%';

-- Retrieve all products with prices between 10 and 100
SELECT * 
FROM products 
WHERE price BETWEEN 10 AND 100;

-- Retrieve all orders placed after January 1, 2022
SELECT * 
FROM orders 
WHERE order_date > '2022-01-01';

-- Retrieve all employees except those with a salary less than or equal to 30000
SELECT * 
FROM employees 
WHERE NOT salary <= 30000;


-- limit 
-- SELECT column1, column2, ...
-- FROM table_name
-- LIMIT number_of_rows;

-- Retrieve the first 5 employees ordered by their salary in descending order
SELECT * 
FROM employees 
ORDER BY salary DESC
LIMIT 5;

-- Retrieve 10 products ordered by their product name in ascending order
SELECT * 
FROM products 
ORDER BY product_name ASC
LIMIT 1;

-- Order BY

-- SELECT column1, column2, ...
-- FROM table_name
-- ORDER BY column1 [ASC | DESC], column2 [ASC | DESC], ...;

-- Retrieve employees sorted by their salary in descending order
SELECT * 
FROM employees 
ORDER BY salary DESC;

-- Retrieve products sorted by their price in ascending order and then by their product name in descending order
SELECT * 
FROM products 
ORDER BY price ASC, product_name DESC;

-- Aggregate function

SELECT 
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM employees;


-- GROUP BY 

-- SELECT column1, aggregate_function(column2)
-- FROM table_name
-- GROUP BY column1;

SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;

SELECT count(manager_id),manager_id
FROM employees
GROUP BY manager_id;

-- update with set

UPDATE employees
SET salary = salary * 1.5
WHERE department_id = 1;
set SQL_SAFE_UPDATES=0;
select * from employees;


-- delete 

DELETE FROM employees
WHERE salary=1200;

-- ALTER 

CREATE TABLE bank (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    account_name VARCHAR(255),
    balance DECIMAL(10, 2)
);

INSERT INTO bank (account_name, balance) VALUES
('John Smith', 5000.00),
('Jane Doe', 7000.00),
('Michael Johnson', 10000.00),
('Emily Davis', 3000.00),
('David Brown', 8500.00),
('Emma Wilson', 9200.00),
('James Lee', 6000.00),
('Olivia Taylor', 4000.00),
('William Clark', 7500.00),
('Sophia Martinez', 8200.00);

ALTER TABLE bank
ADD COLUMN account_type VARCHAR(50);

ALTER TABLE bank
MODIFY COLUMN balance DECIMAL(12, 2);

ALTER TABLE bank
ADD PRIMARY KEY (account_id);

CREATE INDEX idx_account_name ON bank (account_name);

ALTER TABLE bank
CHANGE COLUMN account_name customer_name VARCHAR(255);
