-- DB 목록확인
SHOW DATABASES;

DROP DATABASE sesac;


--  DB 생성
CREATE DATABASE sesac DEFAULT CHARACTER SET UTF8 COLLATE utf8_general_ci;

-- dobong이라는 db를 생성하는데 문자열셋으로 utf8mb4를 콜레이션으로 utf8mb4_unicode_ci를 사용
-- utf8mb4는 utf8보다 더 많은 문자 지원(일부 이모지 지원)
-- 이모지를 저장하는 db라면 utf8mb4, 아니라면 utf8 사용
CREATE DATABASE dobong CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터베이스를 사용하겠다 use 명령어 데이터 베이스 사용 선언
use sesac;




-- --------------테이블 관련 명령어
-- 1. 테이블 생성
/* 
CREATE TABLE products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
)

제약조건?
not null, null허용 x
AUTO_INCREMENT 자동 숫자 증가
primary KEY 기본키(중복허용 x, null값 허용 x)
default 기본값
unique 중복허용 x, null값은 허용
*/
CREATE TABLE products(
    id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL 
);

-- 테이블 목록확인
SHOW TABLES;

-- products에 어떤 컬럼이 있는지 확인
DESC products;


-- 테이블 삭제 
DROP TABLE products;

-- 내용삭제
TRUNCATE TABLE products;

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정 (varchar 를 int 로 수정)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- -----------DML
/*
데이터 조작어 

USER TABLE(
    ID: not null AUTO_INCREMENT PRIMARY KEY, 
    NAME:VARCHAR(10) NOT NULL, 
    AGE, INT NOT NULL 
    ADDRESS VARCHAR(100))

*/


CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES;

DESC user;


-- CREATE 데이터 추가 >>INSERT INTO
-- INSERT INTO 테이블 이름 (컬럽1, 컬럼2, 컬럼3 ...) VALUES (값1, 값2, 값3 ...);

INSERT INTO user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('이한이',22,'서울특별시 성동구');
INSERT INTO user (name, age, address) VALUES('이지은',23,'서울특별시 강동구');
INSERT INTO user (name, age, address) VALUES('윤세희',25,'서울특별시 중구');
INSERT INTO user (name, age, address) VALUES('은세희',26,'서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('최지수',25,'서울특별시 광진구');
INSERT INTO user (name, age, address) VALUES('한솔희',28,'서울특별시 은평구');
INSERT INTO user (name, age, address) VALUES('소이현',29,'서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('아홉구',29,'서울특별시 동대문구');
INSERT INTO user (name, age, address) VALUES('나열십',29,'서울특별시 노원구');

-- 테이블 전체 조회
SELECT * from user; 


-- 데이터 수정 UPDATE - WHERE 세트
-- UPDATE 테이블이름 set 데이터 어떻게 수정할건지 WHERE 어떤 데이터를 찾아올지
UPDATE user set name="김민지" WHERE id=2;
-- 아이디가 2인 애를 찾아서 김민지로 변경

--데이터 삭제 DELETE - WHERE 세트
-- DELETE FROM 테이블이름 WHERE 삭제 조건;
DELETE FROM user WHERE id=2;
--아이디가 2인 애를 삭제


-- DELETE FROM user  --> 데이터 반납 X
-- 전체 데이터 삭제

-- TRUNCATE FROM user, DROP --> 데이터 반납

-- TRUNCATE TABLE user


-- 이씨인 사람 지우기
DELETE from user WHERE name like '이%';



-- INSERT INTO 테이블이름 (컬럼1, 컬럼2 ,..) VALUES(값1, 값2, ..);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');


-- 4. 데이터 조회 (READ) SELECT from 
SELECT * from user; --USER 테이블에서 전체 컬럼 조회 SELECT~from~
SELECT name from user;  --이름 컬럼만 조회
SELECT name,age from user; --이름, 나이 속성 조회

--where 절로 조건 적용

SELECT * from user where age>=25;
SELECT * from user where id=3;
SELECT name from user where id=3; --아이디가 3인 네임만 보여주세요

SELECT id, age from user WHERE name='이지은';


-- order by : 데이터 정렬
-- desc 내림차순, asc 오름차순(기본)


SELECT * from user ORDER BY age;
SELECT * from user ORDER BY age asc;
SELECT * from user ORDER BY age desc;

SELECT * from user WHERE id>6 ORDER BY age;

--LIKE 문자열 패턴 조회 (WHERE와 함께 쓰임)
--서울로 시작하는 주소 찾기

SELECT * FROM USER WHERE ADDRESS LIKE '서울%';

--이름의 마지막 글자가 '희'인 사람을 찾기
SELECT * FROM USER WHERE NAME LIKE '%희';
SELECT * FROM USER WHERE NAME LIKE '__희';

--주소에 광역시가 들어가는 사람
SELECT * FROM USER WHERE address Like '%광역%';

--이름에 희가 들어가는 사람 이름 컬럼만 조회
SELECT name from user where name Like '%희%';

-- LIMIT 데이터의 갯수제한

SELECT * FROM USER LIMIT 3;
SELECT * FROM USER WHERE ADDRESS LIKE '서울%' LIMIT 2;


-- BETWEEN A AND B  A와 B의 사이값 조회 (A,B는 포함)
SELECT * FROM USER WHERE AGE BETWEEN 25 AND 30;

--IN(20,21,22,23)
-- in(리스트) 리스트의 요소와 일치하면 참
SELECT * from user where age in(20,21,22,23)

-- is null /is not null

INSERT into user (name, age) VALUES('서현승', 28);

SELECT * from user WHERE address is null

SELECT name, address from user WHERE address is not null;

-- 논리연산자:and, or, not

-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 검색

SELECT * from user WHERE address is not null AND age>25;
SELECT * from user WHERE address is not null or age>25;

--이씨이면서 나이가 22살인 사람 이름속성만 출력
select name from user where name LIKE '이%' and age=22;

SELECT age from user;
SELECT DISTINCT age from user;



--실습
use dobong;

CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

DESC dobong;



ALTER TABLE member MODIFY name VARCHAR(5) NOT NULL;

ALTER TABLE member MODIFY id VARCHAR(10);

ALTER TABLE member DROP age;

ALTER TABLE member ADD interest VARCHAR(100);

DESC member;

DROP TABLE user;





CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'm', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT NOT NULL DEFAULT 0
);

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'm', '1990-01-31',33)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31',31)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'm', '1984-10-18',39)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27',47)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03',22)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'm', '1999-11-11',24)


SELECT * FROM user ORDER BY birthday;
SELECT * FROM user where gender='m' ORDER BY name DESC;
SELECT id, name FROM user where birthday BETWEEN '1990-01-01' and '1999-12-30';

SELECT* from user where birthday like '____-06-__' ORDER BY birthday;

SELECT * FROM user WHERE gender LIKE 'm' AND birthday LIKE '197%';

SELECT * FROM user ORDER BY age DESC LIMIT 3;

SELECT * FROM user WHERE age BETWEEN 25 AND 50;

UPDATE user SET pw='12345678' WHERE id = 'hong1234';

DELETE FROM user WHERE id = 'jungkrat';


-- group by , having


SHOW DATABASE;

use sesac;

show TABLEs;

DROP Table if EXISTS user; 
-- user 테이블 존재할 경우 삭제

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구', '야구', '클라이밍', '배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year INT NOT NULL
);

DESC USER;

INSERT INTO USER VALUES(NULL, '김판곤','축구','남',40);

INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

SELECT * FROM USER;

-- 집계함수
SELECT COUNT(specialize) 
FROM USER WHERE specialize='축구';
-- specialize가 축구인사람의 갯수
-- COUNT: WHERE 조건에 만족하는 튜플의 갯수를 세줌

SELECT sum(career_year)
from user;

SELECT sum(career_year)
from user
WHERE specialize='축구';

SELECT AVG(career_year)
from user
WHERE specialize='축구';

SELECT min(career_year)
from user
WHERE specialize='축구';

SELECT max(career_year)
from user
WHERE specialize='축구';

-- GROUP BY 같은 그룹끼리 묶어서 확인 가능

SELECT specialize
from user
GROUP BY specialize;
--  specialize종류 확인가능

SELECT specialize, count(*)
from user
GROUP BY specialize;
-- specialize 종류, 갯수 출력 


SELECT specialize, COUNT(*)
from user
where gender='여'
GROUP BY specialize
HAVING count(specialize)>=2;
-- 각 분야의 여성들 숫자 세기
-- having 조건은 여성 중 2명 이상의 분야만 출력

-- select >> from >> where 
-- >> group by >> having >> order by >> limit