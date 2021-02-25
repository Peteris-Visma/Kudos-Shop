CREATE DATABASE KudosShop;

CREATE TABLE _Role (
	Role_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Role_Name nvarchar(50) NOT NULL
);

CREATE TABLE _User (
	_User_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	_Name nvarchar(30) NOT NULL,
	Surname nvarchar(30) NOT NULL,
	Password nvarchar (30) NOT NULL,
	Email nvarchar(40) NOT NULL,
	ID_Role int NOT NULL FOREIGN KEY REFERENCES _Role(Role_ID),
	Balance int NOT NULL
);

CREATE TABLE Kudos_Transfer (
	Kudos_Transfer_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	From_User_ID int NOT NULL FOREIGN KEY REFERENCES _User(_User_ID),
	To_User_ID int NOT NULL FOREIGN KEY REFERENCES _User(_User_ID),
	Transfer_Amount int NOT NULL,
	_Description nvarchar(200),
	_Date Date NOT NULL,
	_Status nvarchar(50)
);

CREATE TABLE Product (
	Product_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Product_Name nvarchar(50) NOT NULL,
	Product_Picture varbinary(MAX) NOT NULL,
	Product_Price int NOT NULL,
	isAvailable bit NOT NULL
);
CREATE TABLE Purchase(
	Purchase_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	ID_Product int NOT NULL FOREIGN KEY REFERENCES Product (Product_ID),
	ID_User int NOT NULL FOREIGN KEY REFERENCES _User (_User_ID),
	isApproved bit NOT NULL
);
