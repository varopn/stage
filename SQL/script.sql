CREATE TABLE Users (
  id INT NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  middle_name VARCHAR(255),
  birth_date DATE,
  gender ENUM ("male", "female"),
  age INT,
  phone_number_1 VARCHAR(255),
  phone_number_2 VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE UserWorkExperience (
  id INT NOT NULL,
  user_id INT NOT NULL,
  full_work_years_amount INT,
  details JSON,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE WorkPositions (
  id INT NOT NULL,
  category ENUM ("admin", "engineer", "worker", "service"),
  danger_category ENUM ("A1", "A", "B", "C", "D", "E"),
  employment_type ENUM ("5/2", "1/2", "1/3"),
  average_salary INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE SalaryTransferLogs (
  id INT NOT NULL,
  user_id INT NOT NULL,
  date DATE,
  amount INT,
  tax INT,
  tottal INT,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE UserWorkPositions (
  id INT NOT NULL,
  user_id INT NOT NULL,
  work_position_id INT NOT NULL,
  bonus BOOLEAN,
  start_date DATE,
  workplace VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id),
  FOREIGN KEY(work_position_id) REFERENCES WorkPositions(id)
);

CREATE TABLE UsersEducation (
  id INT NOT NULL,
  user_id INT NOT NULL,
  secondary_educ ENUM ("full", "partial", "none"),
  se_entry_date DATE,
  se_graduation_date DATE,
  se_address VARCHAR(255),
  se_average_mark INT,
  higher_education ENUM ("full", "partial", "none"),
  he_speciality VARCHAR(255),
  he_entry_date DATE,
  he_graduation_date DATE,
  he_address VARCHAR(255),
  HE_AVERAGE_MARK INT,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE UserPassports (
  id INT NOT NULL,
  user_id INT NOT NULL,
  series VARCHAR(255),
  number VARCHAR(255),
  date_of_issue DATE,
  authority VARCHAR(255),
  place_of_residence VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE UserMedExamResults (
  id INT NOT NULL,
  user_id INT NOT NULL,
  conclusion ENUM ("approved", "declined", "pending"),
  exam_date DATE,
  disability_category ENUM ("A", "B", "C", "none"),
  chernobyl_victim BOOLEAN,
  next_exam_date DATE,
  address VARCHAR(255),
  doctor_first_name VARCHAR(255),
  doctor_last_name VARCHAR(255),
  doctor_middle_name VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE UsersMartialStatus (
  id INT NOT NULL,
  user_passport_id INT NOT NULL,
  status ENUM ("NM", "MR", "DS"),
  registration_date DATE,
  spose_first_name VARCHAR(255),
  spose_last_name VARCHAR(255),
  spose_middle_name VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY(user_passport_id) REFERENCES UserPassports(id)
);

INSERT INTO Users 
VALUES
  (1,"John","Smiht","Bob","1994-01-14","male",27,"123123","343434"),
  (2,"Fill","Geory","Geotge","2001-09-05","male",20,"345534","3478903434"),
  (3,"Hale","Jerry","Boris","2003-01-01","male",21,"3465675","67897890"),
  (4,"Dmytro","Show","Kale","1990-04-01","male",31,"1236789123","3678943434"),
  (5,"Coll","Sintias","Loppes","1979-08-08","male",40,"123789678123","346783434");
 
INSERT INTO UsersWorkExperience (id, user_id,full_work_years_amount)
VALUES
  (1,1,5),
  (2,2,3),
  (3,3,2),
  (4,4,8),
  (5,5,21);
 
INSERT INTO WorkPositions 
VALUES
  (1,'QA',"worker","A1","5/2",10000),
  (2,"Lead","admin","A","1/2",134000),
  (3,"Java developer","engineer","C","1/3",45000),
  (4,"Service manager","service","B","5/2",12000),
  (5,"AQA","engineer","A1","5/2",25000);

INSERT INTO UserWorkPositions 
VALUES
  (1,1,1,true,"2016-01-01","Typical street 122"),
  (2,2,2,true,"2018-01-01","Typical street 122"),
  (3,3,3,true,"2019-01-01","Typical street 122"),
  (4,4,4,true,"2013-01-01","Typical street 122"),
  (5,5,5,true,"2000-01-01","Typical street 122");

INSERT INTO SalaryTransferLogs 
VALUES
  (1,1,"2021-08-12",10000,3000,7000),
  (2,2,"2021-08-12",134000,34000,100000),
  (3,3,"2021-08-12",45000,5000,40000),
  (4,4,"2021-08-12",12000,2000,10000),
  (5,5,"2021-08-12",25000,5000,20000);
 
INSERT INTO SalaryTransferLogs 
VALUES
  (6,1,"2021-08-12",10000,3000,7000);

INSERT INTO UsersEducation 
VALUES
  (1,1,"full","2017-01-01","2021-01-01","Test street 123",99,"full","QA","2013-01-01","2017-01-01","Test street 197",89),
  (2,2,"partial","2017-01-01","2021-01-01","Test street 45",45,"full","Java","2013-01-01","2017-01-01","Test street 197",89),
  (3,3,"partial","2017-01-01","2021-01-01","Test street 45",67,"full","Lead","2013-01-01","2017-01-01","Test street 197",89),
  (4,4,"none","2017-01-01","2017-01-01","Test street 2134",68,"full","Service","2013-01-01","2017-01-01","Test street 197",89),
  (5,5,"none","2017-01-01","2017-01-01","Test street 123",100,"full","AQA","2013-01-01","2017-01-01","Test street 197",89);

INSERT INTO UserPassports
VALUES
  (1,1,"NM","34343434","2013-01-01","2312","Ukraine"),
  (2,2,"AF","23458765","2013-01-01","1212","Ukraine"),
  (3,3,"FR","37689034","2013-01-01","6734","Ukraine"),
  (4,4,"CD","09789078","2013-01-01","8778","Ukraine"),
  (5,5,"ER","34343434","2013-01-01","2354","Ukraine");
  
INSERT INTO UsersMartialStatus 
VALUES
  (1,1,"NM","2012-01-01","Andrey","Krushevcskiy","Grigirievich"),
  (2,2,"MR","2012-01-01","Misha","Asderievich","Asderievich"),
  (3,3,"MR","2012-01-01","Compu","Qwerttyivich","Qwerttyivich"),
  (4,4,"MR","2012-01-01","tools","Sqewr","Qwerttyivich"),
  (5,5,"NM","2012-01-01","Salary","qwqwer","GrigirievichGrigirievich");
 
 INSERT INTO UserMedExamResults 
 VALUES
  (1,1,"approved","2012-01-10","A",false,"2021-08-23","Test street 23","Ivan","Stepanovich","chto-to");
 
SELECT * FROM Users;

SELECT first_name, last_name FROM Users;

SELECT first_name, last_name
FROM Users
WHERE age > 25;

SELECT first_name, last_name
FROM Users
WHERE age > 25
ORDER BY first_name;

SELECT COUNT(first_name)
FROM Users
WHERE age > 25;

SELECT *
FROM Users
ORDER BY age DESC;

SELECT *
FROM Users
ORDER BY age DESC
LIMIT 3;

SELECT MIN(age)
FROM Users;

SELECT MAX(age)
FROM Users;

SELECT COUNT(*)
FROM Users;

SELECT AVG(age)
FROM Users;

SELECT SUM(total)
FROM SalaryTransferLogs;

SELECT id, first_name, last_name 
FROM Users
WHERE middle_name IN (
  SELECT middle_name
  FROM Users 
  WHERE middle_name LIKE "B%");
 
SELECT id, first_name, last_name 
FROM Users
WHERE age > (
  SELECT AVG(age)
  FROM Users 
  WHERE middle_name LIKE "B%");
 
SELECT u.id, u.first_name, u.last_name, ums.status, ums.registration_date 
FROM Users u 
INNER JOIN UserPassports up
ON up.user_id = u.id 
INNER JOIN UsersMartialStatus ums 
ON ums.user_passport_id = up.id
WHERE u.age BETWEEN 22 AND 40
ORDER BY u.first_name, u.last_name;

SELECT COUNT(*) AS Married_status
FROM Users u 
INNER JOIN UserPassports up
ON up.user_id = u.id 
INNER JOIN UsersMartialStatus ums
ON ums.user_passport_id = up.id
GROUP BY ums.status;

UPDATE Users 
SET first_name = 'TEST'
WHERE first_name LIKE "D%";

SELECT DISTINCT u.first_name, u.last_name, stl.total
FROM SalaryTransferLogs stl
INNER JOIN Users u
ON u.id = stl.user_id;

SELECT DISTINCT u.first_name, u.last_name, stl.total
FROM SalaryTransferLogs stl
INNER JOIN Users u
ON u.id = stl.user_id
WHERE total < 100000 OR u.age < 20;

SELECT DISTINCT u.first_name, u.last_name, stl.total
FROM SalaryTransferLogs stl
INNER JOIN Users u
ON u.id = stl.user_id
WHERE total < 100000 AND u.age < 25;

SELECT DISTINCT u.first_name, u.last_name, stl.total
FROM SalaryTransferLogs stl
INNER JOIN Users u
ON u.id = stl.user_id
WHERE total BETWEEN  10000 AND 100000 AND u.age < 25;

SELECT *
FROM Users u 
INNER JOIN UserPassports up 
ON up.user_id = u.id 
INNER JOIN UsersMartialStatus ums 
ON ums.user_passport_id = up.id
WHERE ums.status NOT IN ("MR");

SELECT COUNT(*) AS Count_of_Engineers, SUM(total) AS Total_of_Salary, SUM(tax) AS Total_Of_Tax
FROM SalaryTransferLogs stl 
INNER JOIN UserWorkPositions uwp 
ON uwp.user_id = stl.user_id 
INNER JOIN WorkPositions wp 
ON wp.id = uwp.work_position_id 
WHERE wp.category = "engineer";

SELECT COUNT(*) AS Count_of_QA_Engineers, SUM(total) AS Total_of_Salary, SUM(tax) AS Total_Of_Tax
FROM SalaryTransferLogs stl 
INNER JOIN UserWorkPositions uwp 
ON uwp.user_id = stl.user_id 
INNER JOIN WorkPositions wp 
ON wp.id = uwp.work_position_id 
WHERE wp.name LIKE "%QA%";