# MERN App with MSSQL Backend

This is a full-stack web application built using the MERN stack, with a MSSQL database backend.

## Overview

The Patient Information Management System (PIMS) is a web application designed to streamline patient record management through CRUD operations. Developed using React and connected to a SQL Server backend, PIMS offers a user-friendly interface for healthcare providers to efficiently manage patient data.

## Prerequisites

Before running the application, ensure you have the following installed:

1. Node.js
2. MSSQL Server
3. MSSQL studio
4. git

# Getting Started

Follow these steps to run the application locally:

1. Clone the repository:

   `git clone https://github.com/aynuayex/patient-information-management-system.git
`
1. Navigate to the project directory:
   `cd your-project-directory
`

## Setting up the API Backend

1. Navigate to the backend directory:
   `cd backend`

2. Install dependencies:
   `npm install`

3. Configure the MSSQL database connection in the .env file.
   
   create a file named `.env` in the backend folder and paste the code shown below
  ```
   DATABASE_URL="sqlserver://localhost:1433;initial catalog=pims;user=ayex;password=correct;encrypt=true;trustServerCertificate=true"

  ```
  please change the user value 'ayex' and the password value 'correct' to your mssql
  studio login credentials and assure that the account has the neccessary privilage to create a database.

Make sure TCP/IP connections are enabled via [SQL Server Configuration Manager](https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-configuration-manager?view=sql-server-ver16) to avoid No connection could be made because the target machine actively refused it. (os error 10061)

4. run `npx prisma migrate dev --name init` in the terminal where it is opened in the backend folder 

5. Start the backend server:
   `npm start`

## Setting up the React Frontend

1. Navigate to the frontend directory:
   `cd ../frontend`
2. Install dependencies:
   `npm install`
3. since, i am using clerk authentication.go to [clerk](https://dashboard.clerk.com/sign-in) create account or login if you already have and create an application and name it after that click on the react icon and copy all the connection string you see
it should look like something like this `VITE_CLERK_PUBLISHABLE_KEY=pk_test_bm9ybWFsLWtyaWNsZXJrLmFjY291bnRzLmRldiQ
` 
and create a `.env` file inside the frontend folder and paste it there as you see it do not modify and double check it.

1. Start the frontend development server:
   `npm run dev`

## Usage

Once the backend and frontend servers are running, you can access the application at `http://localhost:5173`.

after some operation on the website you can go a head and execute the database **pims** of the created data.

  **don't forget to add `.env` file to your `.gitignore` file** so that you do not accidentally commit your credentials to a remote repository.

# License

This project is licensed under the [License Name] 
