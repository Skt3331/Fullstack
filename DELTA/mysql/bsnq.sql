create database delta_app;
use delta_app;

create table temp(
id Int Primary key);
commit;

create table user(
id varchar(50) primary key,
username varchar(50) unique,
email varchar(50) unique not null,
password varchar(50) not null);
select * from user;
select count(*) as count from user;
delete from user where username="Benton.Gottlieb49";