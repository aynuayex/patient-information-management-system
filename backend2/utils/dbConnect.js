require("dotenv").config();
const sql = require("mssql");

// Database configuration
const config = {
  user: "ayex",
  password: "incorrect",
  server: "localhost",
  database: "test",
  options: {
    encrypt: false, // Change to true if you're using Azure
  },
};

// Function to connect to the database
const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("Connected to MSSQL database");

    // Check if the Patient table exists
    const result =
      await sql.query`SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Patient'`;
    if (result.recordset.length === 0) {
      // If the table doesn't exist, create it
      await sql.query`
        CREATE TABLE Patient (
          id INT IDENTITY(1,1) PRIMARY KEY,
          fullName NVARCHAR(255),
          sex NVARCHAR(10),
          age NVARCHAR(10),
          phone NVARCHAR(20),
          email NVARCHAR(100),
          doctor NVARCHAR(100),
          injury NVARCHAR(255),
          dateOfVisit DATETIME
        )
      `;
      console.log("Patient table created");
    } else {
      console.log("Patient table already exists");
    }
  } catch (err) {
    console.error("Error connecting to MSSQL database:", err);
  }
};

module.exports = connectDB;
