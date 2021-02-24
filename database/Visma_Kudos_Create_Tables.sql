CREATE DATABASE VismaKudos;

CREATE TABLE _Role (
	Role_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Role_Name nvarchar(50) NOT NULL
);

CREATE TABLE _User (
	_User_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	_Name nvarchar(30) NOT NULL,
	Surname nvarchar(30) NOT NULL,
	Email nvarchar(40) NOT NULL,
	ID_Role int NOT NULL FOREIGN KEY REFERENCES _Role(Role_ID),
	Balance int NOT NULL
);

CREATE TABLE Kudos_Category (
	Kudos_Category_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Kudos_Category_Name nvarchar(50) NOT NULL,
	Kudos_Category_Description nvarchar(200),
	Kudos_Category_Screenshot varbinary(MAX)
);

CREATE TABLE Kudos_Transfer (
	Kudos_Transfer_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	From_User_ID int NOT NULL FOREIGN KEY REFERENCES _User(_User_ID),
	To_User_ID int NOT NULL FOREIGN KEY REFERENCES _User(_User_ID),
	ID_Kudos_Category int FOREIGN KEY REFERENCES Kudos_Category(Kudos_Category_ID),
	Transfer_Amount int NOT NULL
);

CREATE TABLE Category (
	Category_ID int NOT NULL PRIMARY KEY,
	Category_Name nvarchar(50) NOT NULL,
	ID_Parent_Category int FOREIGN KEY REFERENCES Category(Category_ID)
);

CREATE TABLE Product (
	Product_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Product_Name nvarchar(50) NOT NULL,
	ID_Category int NOT NULL FOREIGN KEY REFERENCES Category(Category_ID),
	Product_Picture varbinary(MAX) NOT NULL,
	Product_Price int NOT NULL,
	isAvailable bit NOT NULL
);

CREATE TABLE Property (
	Property_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	ID_Category int NOT NULL FOREIGN KEY REFERENCES Category(Category_ID),
	Property_Name nvarchar(50) NOT NULL,
	Property_Unit nvarchar(50),
	Property_Weight nvarchar(50)
);

CREATE TABLE Value_Of_Property (
	Value_Of_Property_ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	ID_Property int NOT NULL FOREIGN KEY REFERENCES Property(Property_ID),
	ID_Product int FOREIGN KEY REFERENCES Product(Product_ID),
	_Value nvarchar(50) NOT NULL
);