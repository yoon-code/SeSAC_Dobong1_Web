CREATE TABLE customer (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

DESC customer;


INSERT INTO customer (id, name, birthday) VALUES ('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');

CREATE TABLE orderlist (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- 다른 테이블의 기본키랑 연결되는게 외래키


-- Foreign Key (현재 테이블 컬럼이름 FK) REFERENCES 기준테이블(속성이름 PK) 
-- ON UPDATE CASCADE: 
-- 기준 테이블(customer)의 데이터가 변경되면 참조테이블(orderlist)의 데이터도 변경

-- ON DELETE CASCADE:
-- 기준 테이블(customer)의 데이터가 삭제되면 참조테이블(orderlist)의 데이터도 삭제됩니다

-- 테이블을 삭제할때 외래키 테이블 데이터 먼저 삭제 
-- FK, PK 관계로 연결된 테이블은 외래키(orderlist) 설정된 테이블을 먼저 삭제


INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES ('ccc', '귀여운텀블러', 1);


SELECT * from customer;
SELECT * from orderlist;

-- JOIN
-- 1. inner joi, inner join과 on사용

SELECT *
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;

-- 2. , 와 where로 inner join
--inner join을 ,로 구분

SELECT orderlist.id, customer.id, customer.name, orderlist.product_name
from customer, orderlist 
where customer.id =orderlist.customer_id;

-- 3. inner join,on사용, where 조건과 함께 사용
SELECT *
from orderlist inner join customer
on customer.id=orderlist.customer.id
where orderlist.quantity >=5;


-- 4. 별칭 지어서 접근
SELECT o.id as order_id, c.name as customer_id, c.name, o.product_name
FROM customer as c, orderlist as o
where 


-- natural join
SELECT *
from orderlist NATURAL join customer;


-- orderlist기준(orderlist 누락 x)
SELECT *
from orderlist LEFT OUTER join customer
    ON customer.id= orderlist.customer_id;


-- customer 기준
SELECT *
from orderlist RIGHT OUTER join customer
    ON customer.id= orderlist.customer_id;




-- 실습
show databases;
use dobong;

CREATE TABLE A_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

CREATE TABLE B_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

desc A_university;
desc B_university;
DROP TABLE if EXISTS subject; 
CREATE TABLE subject(
    register_id int PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(15) NOT NULL,
    subject VARCHAR(30) NOT NULL
);

INSERT INTO A_university VALUES('20115544','a',34);
INSERT INTO A_university VALUES('20156677','b',31);
INSERT INTO A_university VALUES('20227755','c',25);
INSERT INTO A_university VALUES('20232223','d',23);
INSERT INTO A_university VALUES('20201144','e',23);
INSERT INTO A_university VALUES('20145145','f',30);
INSERT INTO A_university VALUES('20180919','g',26);

INSERT INTO B_university VALUES('2022091994','h',29);
INSERT INTO B_university VALUES('2020101021','i',23);
INSERT INTO B_university VALUES('2018187566','j',26);

INSERT INTO subject VALUES(NULL,'20115544','네트워크');
INSERT INTO subject VALUES(NULL,'20115544','알고리즘');
INSERT INTO subject VALUES(NULL,'20156677','알고리즘');
INSERT INTO subject VALUES(NULL,'20227755','네트워크');
INSERT INTO subject VALUES(NULL,'20232223','C언어');
INSERT INTO subject VALUES(NULL,'20145145','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','C언어');
INSERT INTO subject VALUES(NULL,'20180919','네트워크');
INSERT INTO subject VALUES(NULL,'2022091994','C언어');
INSERT INTO subject VALUES(NULL,'2022091994','캡스톤');
INSERT INTO subject VALUES(NULL,'2022091994','웹프레임워크');
INSERT INTO subject VALUES(NULL,'2018187566','C언어');
INSERT INTO subject VALUES(NULL,'2018187566','네트워크');
INSERT INTO subject VALUES(NULL,'2018187566','캡스톤');

select * from a_university;
select * from b_university;
select * from subject;

-- join
-- 1. inner JOIN
SELECT *
FROM A_university INNER JOIN subject
ON A_university.id=subject.id;

SELECT *
FROM A_university, subject
where A_university.id=subject.id;

-- 2. left outer JOIN
SELECT *
FROM A_university LEFT OUTER JOIN subject
ON A_university.id=subject.id;


-- 3. right outer JOIN
SELECT *
FROM A_university RIGHT OUTER JOIN subject
ON A_university.id=subject.id;

-- 4. natural join
SELECT *
FROM A_university NATURAL JOIN subject;





-- ------------------------