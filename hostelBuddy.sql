create database hostelBuddy;

/* MASTER DATABASE */ 
use hostelbuddy;

/* TABLE 1 - STUDENT DETAILS */
CREATE TABLE details(
    name varchar(40),
    registrationNo varchar(15) NOT NULL PRIMARY KEY,
    roomNo INT NOT NULL
);

DESC details;

/* TABLE 2 - ROOM CLEANING SERVICE */
create table roomcleaning(
    registrationNo varchar(15),
    regN varchar(15) NOT NULL,
    Dusting INT,
    Brooming INT,
    Both_services INT,
    CONSTRAINT fk_Service FOREIGN KEY (regN)
    REFERENCES details(registrationNo)
);

DESC roomcleaning;

/* TABLE 3 - MAINTAINANCE */
create table Maintainance(
    regNum varchar(15) NOT NULL,
    electrician INT,
    carpenter INT,
    ac_service INT,
    pestControl INT,
    CONSTRAINT fk_Service2 FOREIGN KEY (regNum)
    REFERENCES details(registrationNo)
);

DESC Maintainance;

/* TABLE 4 - MESS TYPE AND MEAL */
create table Mess(
    regNum2 varchar(15) NOT NULL,
    Mess_Type varchar(7) NOT NULL,
    Meal INT,
    CONSTRAINT fk_Mess FOREIGN KEY (regNum2)
    REFERENCES details(registrationNo)
);

DESC Mess;
