# Kudos-Shop
Visma Labs Kudos shop database

1.  Start with copying everything in the DB-Create-Table file

2.  Log-in into MSSQL Management Studio and press New Query button or use shortcut (CTRL + N)

3.  Paste in the contents of DB-Create-Table file and press F5

4.  If you get an error saying a database like that exists do either:

    4.1. Run MSSQL Management Studio as Admin, open a New Query (CTRL + N), and type DROP DATABASE VismaKudos;
    
        4.1.1. Afterwards Copy & Paste the contents of DB-Create-Table in the query and press F5
  
  
    4.2. Rename the Database in the first line, for example, CREATE DATABASE VismaKudos1;
